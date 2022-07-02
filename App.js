import {
	StyleSheet,
	Text,
	View,
	SafeArea,
	SafeAreaView,
	TextInput,
	Image,
	ScrollView,
	Dimensions,
	StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Feather";
import Icon5 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/EvilIcons";
import Icon6 from "react-native-vector-icons/Entypo";
export default function App() {
	const { height: windowheight } = Dimensions.get("window");
	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={styles.wrapper}>
				{/* <StatusBar barStyle="light-content" /> */}
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.header_text}>Thẻ đang mở</Text>
						<View style={styles.header_icons}>
							<Icon6 style={styles.header_icon} name="back-in-time" />
							<Icon4 style={styles.header_icon} name="trash" />
							<Icon6 style={styles.header_icon} name="dots-three-horizontal" />
						</View>
					</View>
					<View style={styles.feed}>
						<Text style={styles.feed_text}>Bạn không có thẻ nào đang mở</Text>
					</View>
					<View style={styles.button}>
						<Icon2 style={styles.button_icon} name="plus" />
						<Text style={styles.button_text}>Thẻ mới</Text>
					</View>
				</View>
			</SafeAreaView>

			<View style={styles.footer}>
				<View style={styles.footer_option}>
					<Icon6 style={styles.footer_icon} name="home" />
					<Text style={styles.footer_text}>Trang chủ</Text>
				</View>
				<View style={styles.footer_option}>
					<Icon6 style={styles.footer_icon} name="home" />
					<Text style={styles.footer_text}>Trang chủ</Text>
				</View>
				<View style={styles.footer_option}>
					<Icon6 style={styles.footer_icon} name="home" />
					<Text style={styles.footer_text}>Trang chủ</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		marginTop: 5,
	},
	header_text: {
		fontSize: 17,
		fontWeight: "500",
	},
	header_icons: {
		flexDirection: "row",
		alignItems: "center",
	},
	header_icon: {
		fontSize: 18,
		marginHorizontal: 6,
	},
	feed: {
		position: "absolute",
		top: "50%",
		width: "100%",
		alignItems: "center",
	},
	feed_text: {},
	button: {
		backgroundColor: "#fff",
		borderColor: "#cdd",
		borderWidth: 0.2,
		position: "absolute",
		bottom: 80,
		right: 20,
		minWidth: 95,
		height: 40,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 20,
		paddingHorizontal: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	button_icon: {
		fontSize: 20,
		color: "#1972e6",
	},
	button_text: {
		color: "#1972e6",
		fontSize: 12,
		fontWeight: "500",
	},
	footer: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		height: 60,
		backgroundColor: "#fff",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		borderTopColor: "#f7f7f7",
		borderTopWidth: 1,
	},
	footer_option: {
		alignItems: "center",
	},
	footer_icon: {
		color: "#60656a",
	},
	footer_text: {
		fontSize: 10,
		color: "#60656a",
	},
});
