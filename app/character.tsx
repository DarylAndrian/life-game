import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const attributes = [
  { icon: '💪', label: 'Strength', value: 14, max: 20 },
  { icon: '🧠', label: 'Intellect', value: 18, max: 20 },
  { icon: '💬', label: 'Charisma', value: 10, max: 20 },
  { icon: '❤️', label: 'Vitality', value: 12, max: 20 },
  { icon: '⚡', label: 'Agility', value: 8, max: 20 },
];

const achievements = [
  { icon: '🏅', title: 'Early Riser', progress: 'x7' },
  { icon: '🏅', title: 'Bookworm', progress: 'x3' },
  { icon: '🔒', title: 'Marathon Runner', locked: true },
  { icon: '🔒', title: 'Social Butterfly', locked: true },
];

const equipment = [
  { icon: '🎒', title: 'Backpack', detail: '34/50 slots' },
  { icon: '🗡️', title: 'Focused Pen', detail: '+5 Intellect' },
  { icon: '🛡️', title: 'Noise-Canceling Headphones', detail: '+10 Focus' },
];

export default function CharacterScreen() {
  const xpPercent = 78;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Level Card */}
      <LinearGradient
        colors={['#6c5ce7', '#a29bfe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.levelCard}
      >
        <Text style={styles.levelTitle}>Character Sheet</Text>
        <Text style={styles.levelSubtitle}>Level 12 Warrior</Text>
        <View style={styles.xpBarBack}>
          <View style={[styles.xpBarFill, { width: `${xpPercent}%` }]} />
        </View>
        <Text style={styles.xpLabel}>{xpPercent}% to Level 13</Text>
      </LinearGradient>

      {/* Attributes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ATTRIBUTES</Text>
        {attributes.map((attr) => (
          <AttributeBar key={attr.label} {...attr} />
        ))}
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
        {achievements.map((ach) => (
          <View key={ach.title} style={styles.achievementCard}>
            <Text style={styles.achievementIcon}>{ach.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.achievementTitle,
                  ach.locked && styles.achievementLocked,
                ]}
              >
                {ach.title}
              </Text>
              {ach.progress && <Text style={styles.achievementProgress}>{ach.progress}</Text>}
            </View>
          </View>
        ))}
      </View>

      {/* Equipment */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EQUIPMENT</Text>
        {equipment.map((item) => (
          <View key={item.title} style={styles.equipCard}>
            <Text style={styles.equipIcon}>{item.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.equipTitle}>{item.title}</Text>
              <Text style={styles.equipDetail}>{item.detail}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function AttributeBar({ icon, label, value, max }: any) {
  const percent = (value / max) * 100;
  return (
    <View style={styles.attrRow}>
      <Text style={styles.attrIcon}>{icon}</Text>
      <View style={{ flex: 1 }}>
        <View style={styles.attrHeader}>
          <Text style={styles.attrLabel}>{label}</Text>
          <Text style={styles.attrValue}>{value}</Text>
        </View>
        <View style={styles.attrBarBack}>
          <View style={[styles.attrBarFill, { width: `${percent}%` }]} />
        </View>
      </View>
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
  levelCard: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  levelTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  levelSubtitle: {
    fontSize: 16,
    color: '#e0e0ff',
    marginTop: 6,
  },
  xpBarBack: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    marginTop: 16,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  xpLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#a0a0c0',
    marginBottom: 12,
    letterSpacing: 1,
  },
  attrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  attrIcon: {
    fontSize: 20,
    marginRight: 10,
    width: 28,
    textAlign: 'center',
  },
  attrHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  attrLabel: {
    fontSize: 14,
    color: '#c0c0e0',
  },
  attrValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  attrBarBack: {
    height: 6,
    backgroundColor: '#1a1a2e',
    borderRadius: 3,
    overflow: 'hidden',
  },
  attrBarFill: {
    height: '100%',
    backgroundColor: '#6c5ce7',
    borderRadius: 3,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
  },
  achievementIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  achievementTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  achievementLocked: {
    color: '#505070',
  },
  achievementProgress: {
    fontSize: 12,
    color: '#a29bfe',
    marginTop: 2,
  },
  equipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
  },
  equipIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  equipTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  equipDetail: {
    fontSize: 12,
    color: '#8080a0',
    marginTop: 2,
  },
});
