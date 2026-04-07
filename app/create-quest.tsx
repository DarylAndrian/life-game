import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const categories = [
  { id: 'health', label: 'Health', icon: '💪' },
  { id: 'work', label: 'Work', icon: '💼' },
  { id: 'learn', label: 'Learn', icon: '📚' },
  { id: 'social', label: 'Social', icon: '💬' },
];

const difficulties = [
  { id: 'easy', label: 'Easy', xp: 30, gold: 5 },
  { id: 'medium', label: 'Medium', xp: 60, gold: 10 },
  { id: 'hard', label: 'Hard', xp: 120, gold: 20 },
];

const stats = ['Strength', 'Intellect', 'Charisma', 'Vitality', 'Agility'];

export default function CreateQuestScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('health');
  const [difficulty, setDifficulty] = useState('medium');
  const [selectedStat, setSelectedStat] = useState('Strength');

  const handleCreate = () => {
    // Mock: In real app, save to DB
    console.log('Quest created:', { title, category, difficulty, stat: selectedStat });
    router.back();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>New Quest</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Quest Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Morning Run"
          placeholderTextColor="#505070"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.categoryGrid}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryBtn,
                category === cat.id && styles.categoryBtnActive,
              ]}
              onPress={() => setCategory(cat.id)}
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text
                style={[
                  styles.categoryLabel,
                  category === cat.id && styles.categoryLabelActive,
                ]}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Difficulty</Text>
        {difficulties.map((diff) => (
          <TouchableOpacity
            key={diff.id}
            style={[
              styles.difficultyBtn,
              difficulty === diff.id && styles.difficultyBtnActive,
            ]}
            onPress={() => setDifficulty(diff.id)}
          >
            <Text
              style={[
                styles.difficultyLabel,
                difficulty === diff.id && styles.difficultyLabelActive,
              ]}
            >
              {diff.label} (+{diff.xp} XP, +{diff.gold}g)
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Stat Boost</Text>
        <View style={styles.statGrid}>
          {stats.map((stat) => (
            <TouchableOpacity
              key={stat}
              style={[
                styles.statBtn,
                selectedStat === stat && styles.statBtnActive,
              ]}
              onPress={() => setSelectedStat(stat)}
            >
              <Text
                style={[
                  styles.statLabel,
                  selectedStat === stat && styles.statLabelActive,
                ]}
              >
                {stat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createBtn} onPress={handleCreate}>
          <Text style={styles.createText}>Create ✨</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginBottom: 24,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a0a0c0',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1a1a2e',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2a2a4e',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryBtn: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#1a1a2e',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  categoryBtnActive: {
    backgroundColor: '#6c5ce7',
    borderColor: '#a29bfe',
    borderWidth: 2,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  categoryLabel: {
    color: '#8080a0',
    fontWeight: '600',
  },
  categoryLabelActive: {
    color: '#fff',
  },
  difficultyBtn: {
    backgroundColor: '#1a1a2e',
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
  },
  difficultyBtnActive: {
    backgroundColor: '#6c5ce7',
    borderColor: '#a29bfe',
    borderWidth: 2,
  },
  difficultyLabel: {
    color: '#8080a0',
    fontWeight: '600',
    textAlign: 'center',
  },
  difficultyLabelActive: {
    color: '#fff',
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  statBtn: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: '#1a1a2e',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  statBtnActive: {
    backgroundColor: '#6c5ce7',
  },
  statLabel: {
    color: '#8080a0',
    fontWeight: '600',
    fontSize: 13,
  },
  statLabelActive: {
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  cancelBtn: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
  },
  cancelText: {
    color: '#8080a0',
    fontWeight: '700',
    fontSize: 16,
  },
  createBtn: {
    flex: 2,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
  },
  createText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
