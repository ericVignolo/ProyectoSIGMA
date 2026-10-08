import { Link, type Href } from 'expo-router';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';

export function Screen({ children }: PropsWithChildren) {
  return <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps="handled">{children}</ScrollView>;
}

export function NavButton({ href, label }: { href: Href; label: string }) {
  return <Link href={href} asChild><Pressable accessibilityRole="button" style={styles.button}><Text style={styles.buttonText}>{label}</Text></Pressable></Link>;
}

export const styles = StyleSheet.create({
  screen: { padding: 24, gap: 16, width: '100%', maxWidth: 700, alignSelf: 'center' },
  title: { fontSize: 28, fontWeight: '700', color: '#102a43' },
  text: { fontSize: 16, color: '#334e68', lineHeight: 24 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, gap: 8 },
  heading: { fontSize: 20, fontWeight: '600', color: '#102a43' },
  button: { backgroundColor: '#176b87', padding: 18, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#9fb3c8', borderRadius: 8, padding: 14, fontSize: 16 },
  error: { color: '#b42318', fontSize: 16 }
});
