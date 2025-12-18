import 'react-native-reanimated';

import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function TabLayout() {
  return (<NativeTabs>
    <NativeTabs.Trigger name="index">
      <Label>Home</Label> 
      <Icon sf="house.fill" drawable="custom_android_drawable" />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="settings">
      <Label>Settings</Label> 
      <Icon sf="gear" drawable='custom_settings_drawable' />
    </NativeTabs.Trigger>
  </NativeTabs>)
  // const colorScheme = useColorScheme();

  // return (
  //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //       <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
  //     </Stack>
  //     <StatusBar style="auto" />
  //   </ThemeProvider>
  // );
}
