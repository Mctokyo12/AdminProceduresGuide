import { Tabs } from 'expo-router';
import BottomNav from '@/components/layouts/BottomNav';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNav {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="assistant" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
}