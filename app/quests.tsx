import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const dailyQuests = [
  { id: 1, title: 'Workout', stat: 'Str +2', xp: 50, gold: 10, completed: false },
  { id: 2, title: 'Meditate', stat: 'HP +5', xp: 30, gold: 5, completed: false },
  { id: 3, title: 'Read 30 min', stat: 'Int +1', xp: 40, gold: 5, completed: true },
];

const weeklyQuests = [
  { id: 4, title: 'Read 3 books', stat: 'Int +5', xp: 200, gold: 0, completed: false },
  { id: 5, title: 'Network w/ 5 people', stat: 'Cha +3', xp: 150, gold: 0, completed: false },
];

const bossQuests = [
  { id: 6, title: 'Launch MVP Project', stat: 'All +5', xp: 500, gold: 100, due: 'Apr 30', completed: false },
];

export default function QuestsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Quest Board</Text>
      
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabTextActive}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
      </View>

      <QuestSection title="📅 DAILY QUESTS" quests={dailyQuests} />
      <QuestSection title="📆 WEEKLY QUESTS" quests={weeklyQuests} />
      <QuestSection title="🏆 BOSS QUESTS" quests={bossQuests} isBoss />

      <Link href="/create-quest" asChild>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Quest</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

function QuestSection({ title, quests, isBoss }: any) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {quests.map((quest) => (
        <View key={quest.id} style={[styles.questCard, isBoss && styles.bossQuest]}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              {isBoss && <Text>⚔️</Text>}
              <Text style={[styles.questTitle, quest.completed && styles.questCompleted]}>
                {quest.title}
              </Text>
            </View>
            <Text style={styles.questStat}>{quest.stat}</Text>
            <Text style={styles.questReward}>
              Reward: {quest.xp} XP{quest.gold > 0 ? `, ${quest.gold}g` : ''}
            </Text>
            {quest.due && <Text style={styles.questDue}>Due: {quest.due}</Text>}
          </View>
          <Text style={styles.questCheckbox}>{quest.completed ? '☑' : '☐'}</Text>
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#1a1a2e',
  },
  tabActive: {
    backgroundColor: '#6c5ce7',
  },
  tabText: {
    color: '#8080a0',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#a0a0c0',
    marginBottom: 12,
    letterSpacing: 1,
  },
  questCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  bossQuest: {
    borderColor: '#ffa502',
    borderWidth: 2,
    backgroundColor: '#1e1a2e',
  },
  questCheckbox: {
    fontSize: 28,
    marginLeft: 12,
  },
  questTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
  },
  questCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  questStat: {
    fontSize: 12,
    color: '#a29bfe',
    marginTop: 2,
  },
  questReward: {
    fontSize: 11,
    color: '#8080a0',
    marginTop: 4,
  },
  questDue: {
    fontSize: 11,
    color: '#ffa502',
    marginTop: 2,
    fontWeight: '600',
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
