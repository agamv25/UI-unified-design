import React, { useState } from 'react';
import { 
  Image, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Pressable 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Pressable style={{ flex: 1 }} onPress={() => setShowButton(true)}>
        <View style={styles.container}>
          <Image 
            source={require('../../assets/images/company_logo.png')} 
            style={styles.logo} 
          />
          <Text style={styles.title}>WalkBuddy</Text>
          <Text style={styles.subtitle}>InnovAIte</Text>

          {showButton && (
            <Pressable 
              style={styles.customButton} 
              onPress={() => router.push('/home')}
            >
              <Text style={styles.customButtonText}>Start Walking</Text>
            </Pressable>
          )}
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#000' },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 160, height: 160, resizeMode: 'contain', marginBottom: 24 },
  title: { fontSize: 36, fontWeight: '800', color: '#FFA500' },
  subtitle: {
    position: 'absolute',
    bottom: 56,
    fontSize: 22,
    fontWeight: '800',
    color: '#FFA500',
  },
  customButton: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#4b4444ff', 
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  customButtonText: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: '700',
  },
});
