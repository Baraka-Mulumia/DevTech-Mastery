import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from '../components/lists';
import React, { useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import Screen from '../components/Screen';
import { generateDummyData } from '../lib/functions';
import { map } from 'lodash';

const INITIAL_MESSAGES = map(generateDummyData(5), (item) => ({
  ...item,
  image: require('../assets/mosh.jpg'),
}));

export const MessagesScreen = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing...');

    setTimeout(() => {
      setMessages(
        map(generateDummyData(5), (item) => ({
          ...item,
          image: require('../assets/mosh.jpg'),
        }))
      );
      setRefreshing(false);
    }, 3000);
  };

  const handlePress = (message) => {
    // console.log('Message selected', message);
  };

  const handleDelete = (id) => {
    // Delete the message from the messages array
    const newMessages = messages.filter((message) => message.id !== id);
    setMessages(newMessages);

    // Call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.description}
            image={item.image}
            onPress={() => handlePress(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        // Pull to refresh
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
