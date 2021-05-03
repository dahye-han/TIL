import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts/index'; 
import Exercises from './Exercises/index';
import { muscles, exercises } from '../store.js'
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

    render() {
        const exercises = this.getExercisesByMuscles(), 
        { category, exercise, editMode } = this.state;

        return <Fragment>
            <Header 
                muscles={muscles}
                onExerciseCreate={this.handleExerciseCrete}
            />

            <Exercises 
                exercise={exercise}
                category={category}
                exercises={exercises}
                editMode={editMode}
                muscles={muscles}
                onSelect={this.handleExerciseSelected}
                onDelete={this.handleExerciseDelete}
                onSelectEdit={this.handleExerciseSelectEdit}
                onEdit={this.handleExerciseEdit}
            />

            <Footer 
                category={category}
                muscles={muscles}
                onSelect={this.handleCategorySelected}
            />
        </Fragment>
    }
}