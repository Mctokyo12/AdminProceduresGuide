import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import AppHeader from '@/components/layouts/AppHeader';
import { getTranslations } from '@/locales';
import { procedures } from '@/features/procedures';

const categoryGrid = [
  ['État civil', 'Naissance, mariages, décès', '▣'],
  ['Identité & voyage', 'CNI, passeport, visa', '◆'],
  ['Entreprise', 'Création, fiscalité', '▦'],
  ['Transport', 'Permis, carte grise', '↗'],
  ['Justice', 'Casier, judiciaire', '⚖'],
  ['Famille', 'Tutelle, mariage, succession', '♟'],
] as const;

const polesGrid = [
  ['État Civil', 'Naissance, Mariage, Décès', '▣'],
  ['Identité & Voyage', 'CNI, Passeport, Visa', '◆'],
  ['Justice & Légal', 'Casier, Tribunaux', '⚖'],
  ['Entreprise & Fiscal', 'Création, Impôts', '▦'],
] as const;

export default function HomeScreen() {
  const [showPoles, setShowPoles] = useState(false);
  const t = getTranslations();

  return (
    <View className="flex-1 bg-background">
      <AppHeader onProfilePress={() => router.push('/')} />
      <ScrollView className="flex-1" contentContainerClassName="px-4 pb-24 pt-4" showsVerticalScrollIndicator={false}>
        {showPoles ? (
          <PolesView t={t} onBack={() => setShowPoles(false)} />
        ) : (
          <OverviewView t={t} onPoles={() => setShowPoles(true)} />
        )}
      </ScrollView>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t.home.ask}
        onPress={() => router.push('/')}
        className="absolute bottom-4 right-4 h-12 flex-row items-center rounded-full bg-primary-container px-4"
      >
        <Text className="mr-2 text-[16px] text-primary-foreground">▣</Text>
        <Text className="text-[14px] font-bold text-primary-foreground">{t.home.ask}</Text>
      </Pressable>
    </View>
  );
}

function OverviewView({ t, onPoles }: { t: ReturnType<typeof getTranslations>; onPoles: () => void }) {
  return (
    <View>
      <View className="mb-4 flex-row items-center justify-between">
        <View className="flex-row items-center rounded-full bg-track px-3 py-1.5">
          <View className="mr-2 size-2 rounded-full bg-primary-container" />
          <Text className="mr-3 text-[12px] font-semibold leading-4 text-primary">{t.home.updated}</Text>
          <Text className="text-[11px] text-muted-foreground">• {t.home.offlineReady}</Text>
        </View>
        <View className="rounded-full bg-track px-2.5 py-1">
          <Text className="text-[11px] font-semibold text-muted-foreground">{t.home.sources}</Text>
        </View>
      </View>

      <View className="mb-3">
        <Text className="text-[24px] font-bold leading-[30px] tracking-tight text-foreground">{t.home.question}</Text>
        <Text className="mt-1 text-[14px] leading-5 text-muted-foreground">{t.home.subtitle}</Text>
      </View>

      <Pressable
        accessibilityRole="search"
        accessibilityLabel={t.home.searchPlaceholder}
        onPress={() => router.push('/')}
        className="mb-6 h-[52px] flex-row items-center rounded-xl border border-border bg-card px-3"
      >
        <Text className="mr-3 text-[18px] text-primary">⌕</Text>
        <Text className="flex-1 text-[16px] text-subtle">{t.home.searchPlaceholder}</Text>
        <Text className="text-[18px] text-muted-foreground">🎙</Text>
      </Pressable>

      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-[18px] font-bold text-foreground">{t.home.categories}</Text>
        <Pressable accessibilityRole="button" accessibilityLabel={t.home.polesCount} onPress={onPoles}>
          <Text className="text-[12px] font-semibold text-muted-foreground">{t.home.polesCount}</Text>
        </Pressable>
      </View>
      <View className="mb-6 flex-row flex-wrap justify-between">
        {categoryGrid.map(([title, subtitle, icon]) => (
          <Pressable
            key={title}
            accessibilityRole="button"
            accessibilityLabel={title}
            onPress={() => router.push('/')}
            className="mb-2 min-h-[112px] w-[48.5%] justify-between rounded-xl border border-border bg-card p-3.5"
          >
            <View className="size-10 items-center justify-center rounded-lg bg-surface-muted">
              <Text className="text-[18px] text-primary">{icon}</Text>
            </View>
            <View>
              <Text className="text-[14px] font-bold text-foreground">{title}</Text>
              <Text className="mt-1 text-[12px] leading-4 text-muted-foreground">{subtitle}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View className="mb-2 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-[18px] font-bold text-foreground">{t.home.frequent}</Text>
          <View className="ml-2 rounded-full bg-warning-surface px-2 py-0.5">
            <Text className="text-[12px] font-bold text-warning">{t.home.popular}</Text>
          </View>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel={t.home.seeAll} onPress={() => router.push('/')}>
          <Text className="text-[12px] font-semibold text-primary">{t.home.seeAll}</Text>
        </Pressable>
      </View>
      <View className="gap-2">
        {procedures.map((procedure) => (
          <ProcedureCard key={procedure.id} procedure={procedure} />
        ))}
      </View>
    </View>
  );
}

function ProcedureCard({ procedure }: { procedure: (typeof procedures)[number] }) {
  const t = getTranslations();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={procedure.title}
      onPress={() => router.push('/')}
      className="min-h-[76px] flex-row items-center rounded-xl border border-border bg-card p-3.5"
    >
      <View className="mr-2 size-9 items-center justify-center rounded-lg bg-surface-muted">
        <Text className="text-[16px] text-primary">▤</Text>
      </View>
      <View className="flex-1">
        <Text className="text-[16px] font-bold text-foreground">{procedure.title}</Text>
        <View className="mt-1 self-start rounded-full bg-primary-tint px-2 py-0.5">
          <Text className="text-[11px] font-semibold text-primary">
            {procedure.id === 'birth-certificate' ? t.procedures.birthBadge : procedure.cost}
          </Text>
        </View>
        <Text className="mt-1 text-[12px] text-muted-foreground">
          {procedure.id === 'passport' ? t.procedures.passportDescription : procedure.category}
        </Text>
        <Text className="mt-1 text-[11px] font-semibold text-subtle">{procedure.duration} • {procedure.sources.join(' / ')}</Text>
      </View>
      <Text className="ml-2 text-[18px] text-subtle">›</Text>
    </Pressable>
  );
}

function PolesView({ t, onBack }: { t: ReturnType<typeof getTranslations>; onBack: () => void }) {
  return (
    <View>
      <View className="mb-3 rounded-xl bg-surface-muted p-3">
        <Text className="text-[14px] font-semibold text-foreground">{t.home.offlineActive}</Text>
        <Text className="mt-1 text-[12px] text-muted-foreground">{t.home.offlineData}</Text>
      </View>

      <View className="mb-4 flex-row rounded-xl border border-border bg-card p-3.5">
        <View className="mr-3 size-10 items-center justify-center rounded-xl bg-warning-surface">
          <Text className="text-[16px] font-bold text-warning">!</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[14px] font-bold text-foreground">{t.home.lawGuaranteed}</Text>
          <Text className="mt-1 text-[13px] leading-[19px] text-muted-foreground">{t.home.lawText}</Text>
        </View>
      </View>

      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-[18px] font-bold text-foreground">{t.home.poles}</Text>
        <Pressable accessibilityRole="button" accessibilityLabel={t.home.domainsCount} onPress={onBack}>
          <Text className="text-[12px] font-semibold text-primary">{t.home.domainsCount}</Text>
        </Pressable>
      </View>
      <View className="mb-6 flex-row flex-wrap justify-between">
        {polesGrid.map(([title, subtitle, icon]) => (
          <Pressable
            key={title}
            accessibilityRole="button"
            accessibilityLabel={title}
            onPress={() => router.push('/')}
            className="mb-2 min-h-[106px] w-[48.5%] rounded-xl border border-border bg-card p-3"
          >
            <View className="mb-2 size-10 items-center justify-center rounded-lg bg-surface-muted">
              <Text className="text-[16px] text-primary">{icon}</Text>
            </View>
            <Text className="text-[14px] font-bold text-foreground">{title}</Text>
            <Text className="mt-1 text-[12px] text-muted-foreground">{subtitle}</Text>
          </Pressable>
        ))}
      </View>

      <Text className="mb-2 text-[18px] font-bold text-foreground">{t.home.priority}</Text>
      {procedures.map((procedure) => (
        <View key={procedure.id} className="mb-2">
          <ProcedureCard procedure={procedure} />
        </View>
      ))}

      <View className="mt-3 rounded-xl bg-header p-4">
        <Text className="text-[18px] font-bold text-header-foreground">{t.home.assistance}</Text>
        <Text className="mt-1 text-[12px] text-header-muted">{t.home.assistanceSubtitle}</Text>
        <Text className="mt-3 text-[14px] leading-[22px] text-header-foreground">{t.home.assistanceText}</Text>
        <View className="mt-3 flex-row gap-2">
          <Pressable accessibilityRole="button" accessibilityLabel={t.home.number1500} className="h-12 flex-1 items-center justify-center rounded-xl bg-card">
            <Text className="font-bold text-primary">{t.home.number1500}</Text>
          </Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel={t.home.police117} className="h-12 flex-1 items-center justify-center rounded-xl bg-primary">
            <Text className="font-bold text-primary-foreground">{t.home.police117}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}