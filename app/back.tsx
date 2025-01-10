
import BackgroundService from 'react-native-background-actions';

// You can do anything in your task such as network requests, timers and so on,
// as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// React Native will go into "paused" mode (unless there are other tasks running,

import { Button } from "@/components/ui";
import { deleteFromStorage, getFromStorage } from '@/utils';

const sleep = (time: number) => new Promise((resolve) => setTimeout(() => resolve(4), time));

// You can do anything in your task such as network requests, timers and so on,
// as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// React Native will go into "paused" mode (unless there are other tasks running,
// or there is a foreground app).
const veryIntensiveTask = async (taskDataArguments: any) => {
    // Example of an infinite loop task
    //
    console.log(BackgroundService.isRunning(), "ISRUNNING")
};

const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    parameters: {
        delay: 1000,
    },
};

export default function Back() {
    const onPress = async () => {
        await deleteFromStorage('access')
        const token = await getFromStorage('access')
        console.log(token)
        // await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description' }); //
        // await BackgroundService.stop();
    }
    return <Button onPress={onPress} >press</Button>
}
