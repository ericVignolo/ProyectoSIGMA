import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, gap: 16 },
  title: { fontSize: 24, fontWeight: '600' },
  button: {
    borderWidth: 1,
    borderColor: '#8a8a8a',
    borderRadius: 6,
    backgroundColor: '#fafafa',
    padding: 14,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  buttonText: { fontSize: 16, color: '#222' },
});
