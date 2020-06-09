<Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={Homescreen}
    options={{
      title: "HOME",
      headerStyle: { backgroundColor: "#000" },
      headerTintColor: "#fff",
      headerRight: () => (
        <Button
          onPress={() => alert("Oops")}
          title="Info"
          color="#fff"
          style={{ marginRight: "10" }}
        ></Button>
      ),
    }}
  />
  <Stack.Screen
    name="Details"
    component={Details}
    options={({ route }) => ({ title: route.params.name })}
    options={{
      headerStyle: { backgroundColor: "#000" },
      headerTintColor: "#fff",
    }}
  />
</Stack.Navigator>;
