import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const rewards = [
  { id: 1, title: 'Coffee Break', cost: 50, icon: '☕', category: 'reward' },
  { id: 2, title: '1hr Gaming', cost: 100, icon: '🎮', category: 'reward' },
  { id: 3, title: 'Treat Meal', cost: 150, icon: '🍕', category: 'reward' },
  { id: 4, title: 'Sleep In', cost: 200, icon: '💤', category: 'reward' },
];

const cosmetics = [
  { id: 5, title: 'Dark Theme', cost: 80, icon: '🎨', category: 'cosmetic' },
  { id: 6, title: 'Particle Effects', cost: 120, icon: '✨', category: 'cosmetic' },
  { id: 7, title: 'Legendary Frame', cost: 200, icon: '👑', category: 'cosmetic' },
];

export default function ShopScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Gold Header */}
      <View style={styles.goldHeader}>
        <Text style={styles.goldTitle}>Merchant's Shop</Text>
        <View style={styles.goldBadge}>
          <Text style={styles.goldIcon}>💰</Text>
          <Text style={styles.goldAmount}>340</Text>
        </View>
      </View>

      {/* Real Rewards */}
      <ShopSection title="REDEEM REAL REWARDS" items={rewards} />

      {/* Cosmetics */}
      <ShopSection title="COSMETICS" items={cosmetics} />
    </ScrollView>
  );
}

function ShopSection({ title, items }: any) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item: any) => (
        <View key={item.id} style={styles.itemCard}>
          <Text style={styles.itemIcon}>{item.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemCost}>💰 {item.cost}g</Text>
          </View>
          <TouchableOpacity style={styles.redeemBtn}>
            <Text style={styles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  goldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  goldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  goldBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 8,
  },
  goldIcon: {
    fontSize: 20,
  },
  goldAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#a0a0c0',
    marginBottom: 12,
    letterSpacing: 1,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemIcon: {
    fontSize: 28,
    marginRight: 14,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  itemCost: {
    fontSize: 13,
    color: '#ffa502',
    marginTop: 4,
    fontWeight: '600',
  },
  redeemBtn: {
    backgroundColor: '#6c5ce7',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  redeemText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
});
