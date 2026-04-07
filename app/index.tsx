import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// Mock data
const userStats = {
  level: 12,
  xp: 2340,
  xpToNext: 3000,
  class: 'Warrior',
  streak: 7,
  questsToday: { completed: 3, total: 5 },
  stats: {
    strength: 14,
    intellect: 18,
    charisma: 10,
    vitality: 12,
  },
};

const activeQuests = [
  { id: 1, title: 'Morning Run', xp: 50, gold: 10, stat: 'Strength', completed: false },
  { id: 2, title: 'Read 30 min', xp: 30, gold: 5, stat: 'Intellect', completed: true },
  { id: 3, title: 'Finish report', xp: 80, gold: 15, stat: 'Intellect', completed: false },
];

export default function HomeScreen() {
  const xpPercent = (userStats.xp / userStats.xpToNext) * 100;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header / Level Card */}
      <LinearGradient
        colors={['#6c5ce7', '#a29bfe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.levelCard}
      >
        <View style={styles.levelHeader}>
          <View>
            <Text style={styles.playerName}>Charlotte's Quest</Text>
            <Text style={styles.playerClass}>
              Level {userStats.level} • {userStats.class}
            </Text>
          </View>
          <Text style={styles.xpText}>{userStats.xp}/{userStats.xpToNext} XP</Text>
        </View>
        <View style={styles.xpBarBack}>
          <View style={[styles.xpBarFill, { width: `${xpPercent}%` }]} />
        </View>
      </LinearGradient>

      {/* Stats Grid */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>📊 STATS</Text>
        <View style={styles.statsGrid}>
          <StatBox icon="💪" label="Str" value={userStats.stats.strength} />
          <StatBox icon="🧠" label="Int" value={userStats.stats.intellect} />
          <StatBox icon="💬" label="Cha" value={userStats.stats.charisma} />
          <StatBox icon="❤️" label="HP" value={userStats.stats.vitality} />
        </View>
      </View>

      {/* Streak & Progress */}
      <View style={styles.progressRow}>
        <View style={styles.progressBox}>
          <Text style={styles.progressEmoji}>🔥</Text>
          <Text style={styles.progressLabel}>Streak</Text>
          <Text style={styles.progressValue}>{userStats.streak} days</Text>
        </View>
        <View style={styles.progressBox}>
          <Text style={styles.progressEmoji}>⭐</Text>
          <Text style={styles.progressLabel}>Today</Text>
          <Text style={styles.progressValue}>
            {userStats.questsToday.completed}/{userStats.questsToday.total} quests
          </Text>
        </View>
      </View>

      {/* Active Quests */}
      <View style={styles.questsContainer}>
        <Text style={styles.sectionTitle}>ACTIVE QUESTS</Text>
        {activeQuests.map((quest) => (
          <View key={quest.id} style={[styles.questCard, quest.completed && styles.questCompleted]}>
            <Text style={styles.questCheckbox}>{quest.completed ? '☑' : '☐'}</Text>
            <View style={{ flex: 1 }}>
              <Text style={[styles.questTitle, quest.completed && styles.questTitleCompleted]}>
                {quest.title}
              </Text>
              <Text style={styles.questReward}>
                +{quest.xp} XP • +{quest.gold}g • {quest.stat}
              </Text>
            </View>
          </View>
        ))}

        <Link href="/create-quest" asChild>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ New Quest</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

function StatBox({ icon, label, value }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
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
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  playerClass: {
    fontSize: 14,
    color: '#e0e0ff',
    marginTop: 4,
  },
  xpText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  xpBarBack: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  statsContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#a0a0c0',
    marginBottom: 12,
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#8080a0',
    marginBottom: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  progressRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  progressBox: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  progressEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    color: '#8080a0',
    marginBottom: 4,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  questsContainer: {
    marginTop: 8,
  },
  questCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  questCompleted: {
    opacity: 0.6,
  },
  questCheckbox: {
    fontSize: 24,
    marginRight: 12,
  },
  questTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  questTitleCompleted: {
    textDecorationLine: 'line-through',
  },
  questReward: {
    fontSize: 12,
    color: '#a29bfe',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#6c5ce7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
