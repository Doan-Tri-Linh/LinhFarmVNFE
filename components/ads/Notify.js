import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function Notify(){
    return(
        <Box bg={'#ff7676'} color='white'
            p={3} mt={2}
            borderRadius='12px'
        >
            <Text size={"lg"} fontWeight={"bold"}>Thông báo !</Text>
            <Text size={"sm"}> Nhân dịp khai trương Linh Farm sẽ giảm 50% phí vận chuyển cho khách hàng ở TP. HỒ Chí Minh hoặc khách hàng đăng ký tài khoản  từ ngày 1/7 đến 30/7 </Text>
        </Box>
    )
}
export default Notify