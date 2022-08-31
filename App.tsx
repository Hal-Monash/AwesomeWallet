import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import ConsentScreen from "./screens/Consent";
import PhraseBackUpScreen from "./screens/BackUpPhrase";
import YourPhraseScreen from "./screens/YourPhrase";
import CurrencySelect from "./screens/CurrencySelect";
import ImportMultiCoinWallet from "./screens/ImportMultiCoinWallet";
import TransactionPage from "./screens/TransactionPage";
import BitcoinDetails from "./screens/BitcoinDetails";
import Withdraw from "./screens/Withdraw";
import CoinList from "./screens/CoinList";
import Receive from "./screens/Receive";
import MailDetails from "./screens/Game Page/MailDetails";
import PhonePage from "./screens/Game Page/PhonePage";
import MailList from "./screens/Game Page/MailList";
import test from "./screens/test";
import Notebook from "./screens/components/Notebook";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen*/}
        {/*  name="test"*/}
        {/*  component={test}*/}
        {/*  options={{ headerShown: false }}*/}
        {/*  initialParams={{ key: "value" }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="test"*/}
        {/*  component={Notebook}*/}
        {/*  options={{ headerShown: false }}*/}
        {/*  initialParams={{ key: "value" }}*/}
        {/*/>*/}
        <Stack.Screen
          name="PhonePage"
          component={PhonePage}
          options={{ headerShown: false }}
          initialParams={{ key: "value" }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Consent" component={ConsentScreen} />
        <Stack.Screen name="Your Secret Phrase" component={YourPhraseScreen} />
        <Stack.Screen
          name="Back Up Your Phrase"
          component={PhraseBackUpScreen}
        />
        <Stack.Screen
          name="Select Your Wallet Type"
          component={CurrencySelect}
        />
        {/*<Stack.Screen name="CreateStepFour" component={CreateStepFourScreen} />*/}
        <Stack.Screen
          name="Import Your Multi-Coin Wallet"
          component={ImportMultiCoinWallet}
        />
        <Stack.Screen name="Your Home Page" component={TransactionPage} />
        <Stack.Screen
          name="Import Your BTC Wallet"
          component={ImportMultiCoinWallet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Import Your ETH Wallet"
          component={ImportMultiCoinWallet}
        />
        <Stack.Screen
          name="Import Your Nano Wallet"
          component={ImportMultiCoinWallet}
        />
        <Stack.Screen
          name="Import Your Theta Wallet"
          component={ImportMultiCoinWallet}
        />
        <Stack.Screen
          name="BitcoinDetails"
          component={BitcoinDetails}
          options={({ route }) => ({
            title: route.params.currencyItem.description.toString(),
          })}
        />
        <Stack.Screen
          name="Import Your XRP Wallet"
          component={ImportMultiCoinWallet}
        />
        <Stack.Screen name="Send To" component={Withdraw} />
        <Stack.Screen name="List" component={CoinList} />
        <Stack.Screen
          name="Receive"
          component={Receive}
          options={({ route }) => ({
            title: "Receive " + route.params.currencyItem.currency.toString(),
          })}
        />
        <Stack.Screen
          name="Mail Page"
          component={MailDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MailList" component={MailList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
