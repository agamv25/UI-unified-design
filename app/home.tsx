import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.toptext}>Home</Text>
      <View style={styles.line} />

      <View style={styles.locationBlock}>
        {/* Row with text on left and star on right */}
        <View style={styles.row}>
          <Text style={styles.subtext}>My Current</Text>
          <Icon name="star" size={22} color="yellow" />
        </View>

        {/* Address lines */}
        <Text style={styles.addressText}>Street Address</Text>
        <Text style={styles.addressText}>City</Text>

        {/* Row for Zip + Share */}
        <View style={styles.row}>
          <Text style={styles.addressText}>Zip</Text>
          <Icon name="share-alt" size={22} color="yellow" />
        </View>
        <br></br>
        <view style={styles.line} />
      </View>
      <View style={styles.iconGrid}>
        <View style={styles.iconBox}>
          <Icon name="bookmark" size={28} color="yellow" />
          <Text style={styles.iconLabel}>Saved</Text>
        </View>
        <View style={styles.iconBox}>
          <Icon name="location-arrow" size={28} color="yellow" />
          <Text style={styles.iconLabel}>Navigation</Text>
        </View>
        <View style={styles.iconBox}>
          <Icon name="search" size={28} color="yellow" />
          <Text style={styles.iconLabel}>Search</Text>
        </View>
        <View style={styles.iconBox}>
          <Icon name="star" size={28} color="yellow" />
          <Text style={styles.iconLabel}>Favourites</Text>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomItem}>
          <Icon name="home" size={28} color="yellow" />
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomItem}>
          <Icon name="camera" size={28} color="yellow" />
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomItem}>
          <Icon name="user" size={28} color="yellow" />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },
  toptext: {
    fontSize: 24,
    color: "yellow",
    fontWeight: "700",
    marginBottom: 10,
  },
  line: {
    height: 2,
    backgroundColor: "yellow",
    width: "100%",
  },
  locationBlock: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtext: {
    fontSize: 20,
    color: "yellow",
    fontWeight: "600",
  },
  addressText: {
    fontSize: 18,
    color: "yellow",
    marginTop: 5,
    marginLeft: 5,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    width: "20%",
    paddingHorizontal: 20,
  },

  iconBox: {
    width: "45%",
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    backgroundColor: "#111",
  },


  iconLabel: {
    color: "yellow",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: "yellow",
    width: "100%",
    paddingVertical: 10,
    marginTop: "auto",   // pushes it to the bottom
    backgroundColor: "#000",
  },

  bottomItem: {
    flex: 1,
    alignItems: "center",
  },

  divider: {
    width: 2,
    height: "60%",
    backgroundColor: "yellow",
  },


});
