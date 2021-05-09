import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from './Layouts/index'; 
import Exercises from './Exercises/index';
import { muscles, exercises } from '../store'
import { Provider } from '../context';
export default class extends Component {
    state = {
        exercises,
        exercise: {}
    }

    getExercisesByMuscles() {
        const initExercises = muscles.reduce((exercises, category) => ({
            ...exercises,
            [category]: []
        }), {})

        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise

                exercises[muscles] = [...exercises[muscles], exercise]

                return exercises
            }, initExercises)
        )
    }
    
    handleCategorySelected = category => {
        this.setState({
            category
        })
    }

    handleExerciseSelected = id => {
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id === id),
            editMode: false
        }))
    }

    handleExerciseCrete = exercise => {
        this.setState(({exercises}) => ({
            exercises: [
                ...exercises,
                exercise
            ]
        }))
    }

    handleExerciseDelete = id => {
        this.setState(({ exercises }) => ({
            exercises: exercises.filter(ex => ex.id !== id),
            editMode: false,
            exercise: {}
        }))
    }

    handleExerciseSelectEdit = id => {
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id === id),
            editMode: true
        }))
    }

    handleExerciseEdit = exercise => {
        this.setState(({exercises}) => ({
            exercises: [
                ...exercises.filter(ex => ex.id !== exercise.id),
                exercise
            ],
            exercise
        }))
    }

    getContext = () => ({
        muscles,
        ...this.state,
        exercisesByMuscles: this.getExercisesByMuscles(),
        onCategorySelect: this.handleCategorySelected,
        onCreate: this.handleExerciseCrete,
        onEdit: this.handleExerciseEdit,
        onSelectEdit: this.handleExerciseSelectEdit,
        onDelete: this.handleExerciseDelete,
        onSelect: this.handleExerciseSelected
    })

    render() {
        return (
        <Provider value={this.getContext()}>
            <CssBaseline />
            <Header />

            <Exercises />

            <Footer />
        </Provider>
        )
    }
}