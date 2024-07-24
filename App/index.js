// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native';

const exercises = [
    { id: '1', name: 'Push-ups', sets: 3, reps: 15 },
    { id: '2', name: 'Squats', sets: 3, reps: 20 },
    { id: '3', name: 'Pull-ups', sets: 3, reps: 10 },
    { id: '4', name: 'Plank', duration: '60s' },
];

const dietPlan = [
    { day: 'Monday', meals: ['Oatmeal', 'Chicken Salad', 'Grilled Salmon'] },
    { day: 'Tuesday', meals: ['Smoothie', 'Turkey Sandwich', 'Steak'] },
    { day: 'Wednesday', meals: ['Pancakes', 'Veggie Wrap', 'Pasta'] },
    { day: 'Thursday', meals: ['Yogurt', 'Chicken Wrap', 'Beef Stir-fry'] },
    { day: 'Friday', meals: ['Eggs', 'Fish Tacos', 'Pizza'] },
    { day: 'Saturday', meals: ['French Toast', 'BLT', 'Curry'] },
    { day: 'Sunday', meals: ['Bagel', 'Soup', 'Roast'] },
];

const ExerciseItem = ({ exercise }) => {
    return (
        <View style={exerciseItemStyles.container}>
            <Text style={exerciseItemStyles.name}>{exercise.name}</Text>
            {exercise.sets && <Text style={exerciseItemStyles.detail}>{`${exercise.sets} sets x ${exercise.reps} reps`}</Text>}
            {exercise.duration && <Text style={exerciseItemStyles.detail}>{`Duration: ${exercise.duration}`}</Text>}
        </View>
    );
};

const exerciseItemStyles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 14,
        color: '#555',
    },
});

const WorkoutScreen = () => {
    return (
        <View style={workoutScreenStyles.container}>
            <Text style={workoutScreenStyles.title}>Today's Workout</Text>
            {exercises.map(exercise => (
                <ExerciseItem key={exercise.id} exercise={exercise} />
            ))}
        </View>
    );
};

const workoutScreenStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});

const DietPlanScreen = () => {
    return (
        <View style={dietPlanScreenStyles.container}>
            <Text style={dietPlanScreenStyles.title}>Weekly Diet Plan</Text>
            {dietPlan.map((dayPlan, index) => (
                <View key={index} style={dietPlanScreenStyles.dayPlan}>
                    <Text style={dietPlanScreenStyles.day}>{dayPlan.day}</Text>
                    {dayPlan.meals.map((meal, idx) => (
                        <Text key={idx} style={dietPlanScreenStyles.meal}>{meal}</Text>
                    ))}
                </View>
            ))}
        </View>
    );
};

const dietPlanScreenStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    dayPlan: {
        marginBottom: 10,
    },
    day: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    meal: {
        fontSize: 16,
        marginVertical: 2,
    },
});

export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <ScrollView contentContainerStyle={appStyles.scrollView}>
                <Text style={appStyles.title}>Gym Tracking Workout & Diet Plan</Text>
                <WorkoutScreen />
                <DietPlanScreen />
            </ScrollView>
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    scrollView: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});