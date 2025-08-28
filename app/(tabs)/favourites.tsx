import { router } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const GOLD = '#FFA500';
const BG = '#000';
const CARD = '#0B0B0B';

function FavButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={styles.button} android_ripple={{ color: '#222' }} onPress={onPress}>
      <Text style={styles.buttonText}>{label.toUpperCase()}</Text>
    </Pressable>
  );
}

export default function FavouritesScreen() {
  const goTo = (dest: string) => {
    // replace with router.push(...) when destination screen is ready
    console.log('Favourites ->', dest);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={BG} />

      {/* Header with back chevron, title and underline */}
      <View style={styles.header}>
        <Pressable hitSlop={12} onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>FAVOURITES</Text>
          <View style={styles.headerUnderline} />
        </View>

        {/* spacer to balance the back button width */}
        <View style={{ width: 24 }} />
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Access your favourite locations.</Text>

      {/* Buttons */}
      <View style={styles.list}>
        <FavButton label="ARTS" onPress={() => goTo('Arts')} />
        <FavButton label="HELPDESK" onPress={() => goTo('Helpdesk')} />
        <FavButton label="Finance" onPress={() => goTo('Finance')} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG, paddingHorizontal: 16 },
  header: {
    marginTop: 78, // moves the whole header block down from the top edge
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  back: { color: GOLD, fontSize: 24, fontWeight: '800', width: 24, textAlign: 'left' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: {
    color: GOLD,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 6, // space between title and underline
  },
  headerUnderline: {
    height: 2,
    backgroundColor: GOLD,
    alignSelf: 'stretch',
    marginHorizontal: 0, // adjust to control underline length
    borderRadius: 1,
  },
  subtitle: { color: GOLD, fontSize: 20, marginTop: 20, marginBottom: 16 },
  list: { gap: 14 },
  button: {
    backgroundColor: CARD,
    borderColor: GOLD,
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  buttonText: { color: GOLD, fontSize: 18, fontWeight: '800', letterSpacing: 1 },
});
