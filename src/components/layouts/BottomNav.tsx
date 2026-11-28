import { Pressable, Text, View } from 'react-native';
import { getTranslations } from '@/locales';
import {House , FolderPlus , Bot , Settings} from 'lucide-react-native';

const tabs = [
  { name: 'index', label: 'home', icon: <House /> },
  { name: 'saved', label: 'saved', icon: <FolderPlus /> },
  { name: 'assistant', label: 'assistant', icon: <Bot /> },
  { name: 'setting', label: 'settings', icon: <Settings /> },
] as const;

type BottomNavProps = {
  state: { index: number; routes?: { key: string; name: string }[] };
  navigation?: { navigate: (name: string) => void };
  navigateToTab?: (routeKey: string) => void;
};

export default function BottomNav({ state, navigation, navigateToTab }: BottomNavProps) {
  const t = getTranslations();

  return (
    <View className="h-16 w-full flex-row border-t border-border bg-elevated">
      {tabs.map((tab, index) => {
        const active = state.index === index;
        return (
          <Pressable
            key={tab.name}
            accessibilityRole="tab"
            accessibilityLabel={t.nav[tab.label]}
            accessibilityState={{ selected: active }}
            onPress={() => {
              if (navigateToTab) {
                navigateToTab(state.routes?.[index]?.key ?? tab.name);
              } else {
                navigation?.navigate(tab.name);
              }
            }}
            className="flex-1 items-center justify-center"
          >
            <View className="relative">
              <Text className={active ? 'text-lg text-primary' : 'text-lg text-muted-foreground'}>{tab.icon}</Text>
              {tab.name === 'saved' ? <View className="absolute -right-2 -top-1 size-2 rounded-full bg-amber" /> : null}
            </View>
            <Text className={active ? 'mt-1 text-[12px] font-semibold text-primary' : 'mt-1 text-[12px] font-semibold text-muted-foreground'}>
              {t.nav[tab.label]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
