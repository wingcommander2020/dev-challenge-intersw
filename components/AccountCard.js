import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from "react-native";

export default function AccountCard({ userAccounts }) {

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {userAccounts.map((acc, iter) =>
                <View style={styles.accountCard} key={iter}>
                    <Text style={{ fontSize: 16 }}>Account: {acc.account}</Text>
                    <Text style={{ fontSize: 16 }}>Balance: {acc.balance} {'\u20A6'}</Text>
                </View>
            )}
        </ScrollView>
    )



}
const styles = StyleSheet.create({
    accountCard: {
        marginTop: 16,
        paddingTop: 16,
        paddingLeft: 16,
        marginRight: 16,
        height: 90,
        width: 190,
        backgroundColor: "#f5f4f4",


        borderRadius: 4,
        shadowColor: '#7a7979',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 2,
    },
});