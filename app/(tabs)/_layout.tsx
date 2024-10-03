import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true, //set header true to show current page at top of screen
      }}>
      {/* screens given by default files */}
      <Tabs.Screen
        name="signin"
        options={{
          title: 'SignIn',
          tabBarActiveTintColor: '#5800BB',
          tabBarIcon: ({color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={"#5800BB"} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarActiveTintColor: '#5800BB',
          tabBarIcon: ({color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={"#5800BB"} />
          ),
        }}
      />
      <Tabs.Screen
        name="navigation"
        options={{
          title: 'Navigation',
          tabBarActiveTintColor: '#5800BB',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'car' : 'car-outline'} color={"#5800BB"} /> ////used website: https://icon-sets.iconify.design/ion/log-in-outline/ to help identify names that are used for icons with react and stuff
          ),
        }}
      />
      {/* screens we defined ourself */}
      <Tabs.Screen //login screen we made ourself
        name="login"
        options={{
          title: 'Login',
          tabBarActiveTintColor: '#5800BB',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={"#5800BB"} />  //used website: https://icon-sets.iconify.design/ion/log-in-outline/ to help identify names that are used for icons with react and stuff
          ),
        }}
        />
    </Tabs>
  );
}
