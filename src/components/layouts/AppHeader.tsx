import { Image, Pressable, Text, View } from 'react-native';
import { 
  PermIdentity,
  Verified
} from 'google-material-icons/outlined';
type Props = {
  onProfilePress: () => void;
};

export default function AppHeader({ onProfilePress }: Props) {
  return (
    <View className="h-20 w-full flex-row items-center bg-header px-3">
      <View className="mr-2 size-10 items-center justify-center overflow-hidden rounded-lg border border-header-foreground/20">
        <Image
          source={require('@/assets/images/app_favicon_and_pwa_icon_for_d_marchescm_a_civic_public_administration_guide.png')}
          className="size-9"
          resizeMode="contain"
        />
      </View>
      <View className="min-w-0 flex-1">
        <View className="flex-row items-center gap-1">
          <Text className="text-[18px] font-bold leading-[18px] text-header-foreground">DémarchesCM</Text>
          <View className="rounded-full bg-primary px-[6px] py-[2px]">
            <Text className="text-[10px] font-semibold uppercase tracking-[0.6px] text-header-muted">OFFICIEL</Text>
          </View>
        </View>
        <Text className="mt-0.5 text-[12px] leading-4 text-header-muted">Guide administratif officiel</Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Voir le profil"
        onPress={onProfilePress}
        className="size-8 items-center justify-center rounded-full bg-primary"
      >
        <Text className="text-[12px] font-bold text-header-foreground"><PermIdentity /></Text>
      </Pressable>
    </View>
  );
}
