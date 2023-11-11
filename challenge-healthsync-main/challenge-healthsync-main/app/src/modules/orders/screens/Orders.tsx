import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Orders = () => {
  const [exams, setExams] = useState([]);
  const [examName, setExamName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [items, setItems] = useState('');
  const [editingExamId, setEditingExamId] = useState(null);

  const addExam = () => {
    if (editingExamId) {
      // Atualizar um exame existente
      const updatedExams = exams.map((exam) =>
        exam.id === editingExamId ? { ...exam, examName, patientName, items } : exam,
      );
      setExams(updatedExams);
      setEditingExamId(null);
    } else {
      // Criar um novo exame
      const newExam = {
        id: new Date().getTime(),
        examName,
        patientName,
        items,
      };
      setExams([...exams, newExam]);
    }

    setExamName('');
    setPatientName('');
    setItems('');
  };

  const editExam = (id) => {
    const examToEdit = exams.find((exam) => exam.id === id);
    if (examToEdit) {
      setExamName(examToEdit.examName);
      setPatientName(examToEdit.patientName);
      setItems(examToEdit.items);
      setEditingExamId(id);
    }
  };

  const deleteExam = (id) => {
    const updatedExams = exams.filter((exam) => exam.id !== id);
    setExams(updatedExams);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Agendar Exame:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Exame"
          value={examName}
          onChangeText={(text) => setExamName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Paciente"
          value={patientName}
          onChangeText={(text) => setPatientName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Itens"
          value={items}
          onChangeText={(text) => setItems(text)}
        />
        <Button
          title={editingExamId ? 'Atualizar Exame' : 'Agendar Exame'}
          onPress={addExam}
          color="#25ca1f"
        />

        {exams.map((exam) => (
          <View key={exam.id} style={styles.order}>
            <Text style={styles.orderTitle}>{exam.examName}</Text>
            <Text style={styles.orderDetails}>Cliente: {exam.patientName}</Text>
            <Text style={styles.orderDetails}>Itens: {exam.items}</Text>
            <Button title="Editar" onPress={() => editExam(exam.id)} color="#25ca1f" />
            <Button title="Excluir" onPress={() => deleteExam(exam.id)} color="#25ca1f" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  order: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderDetails: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default Orders;
