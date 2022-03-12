import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
    StyleSheet,
     View,
     FlatList,
     Button 
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isGoalModalShown, setIsGoalModalShown] = useState(false);

    const addGoalHandler = enteredGoal => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            {
                key: (Math.random() + 1).toString(36).substring(7),
                value: enteredGoal
            }
        ]);
        setIsGoalModalShown(false);
    }

    const onItemRemoveHandler = id => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((item) => {
                return item.key !== id;
            })
        });
    }

    const cancelNewGoalHandler = () => {
        setIsGoalModalShown(false);
    }

    return (
        <View style={styles.screen}>
            <Button
                title="New Goal"
                onPress={() => setIsGoalModalShown(true)} 
            />
            <GoalInput 
                addGoalHandler={addGoalHandler} 
                showModal={isGoalModalShown}
                changeModalState={cancelNewGoalHandler}
            />
            <FlatList 
                data={courseGoals} 
                renderItem={itemData => (
                    <GoalItem 
                        title={itemData.item.value} 
                        id={itemData.item.key}
                        removeItemFromList={onItemRemoveHandler}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
});
