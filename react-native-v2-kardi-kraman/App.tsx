import ColorPallet from './screens/ColorPallet';
import ColorPalletModal from './screens/ColorPalletModal';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPallet"
      component={ColorPallet}
      options={({ route }: { route: any }) => ({
        title: route?.params?.palletName,
      })}
    />
  </MainStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="ColorPalletModal"
          component={ColorPalletModal}
          options={{
            title: 'Color Pallet',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
