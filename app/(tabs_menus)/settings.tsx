import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { OneSignal } from "react-native-onesignal";

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go to Home"
        onPress={
          async () => {
            const ok = await OneSignal.Notifications.canRequestPermission();
            console.log(ok);
            await OneSignal.Notifications.requestPermission(true);
            console.log("modif");

            OneSignal.Notifications.canRequestPermission().then((response) => {
              console.log(response);
            });
            OneSignal.Notifications.getPermissionAsync().then((response) => {
              console.log(response);
            });
          }
          /*     OneSignal.Notifications.canRequestPermission().then((response) => {
              console.log(response);
            })*/

          /*    OneSignal.Notifications.getPermissionAsync().then((response) => {
            console.log(response);
          })*/
        }
      />
    </View>
  );
};

export default Settings;
