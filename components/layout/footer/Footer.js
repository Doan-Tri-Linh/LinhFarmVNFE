import {
    Box,
    Flex,
    Link,
    SimpleGrid,
    Image,
    Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaLink, FaMapMarkerAlt, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

function Footer(){

    const year = new Date().getFullYear();

    return(
        <Box bg='#ffff99' w='100%' pb={{base:'74px', md:'0'}} color='black'>
            <Flex margin='auto' maxW='1250px' p={5} >
                {/* <SimpleGrid columns={{base:'1', md:'2'}} spacing={80}
                            width="100%" 
                > */}
                <SimpleGrid columns={{base:'1', md:'3'}} spacing={10}
                            width="100%" 
                >
                    <Box height='110px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Thông tin liên hệ</Text>
                        {/* <Flex><FaPhoneAlt/><Text fontSize='sm'>&nbsp;&nbsp;(+84) 585 700 679</Text></Flex> */}
                        <Flex><FaPhoneAlt/><Text fontSize='sm'>&nbsp;&nbsp;(+84) 0376052775</Text></Flex>
                        <Flex><FaEnvelope/><Text fontSize='sm'>&nbsp;&nbsp;linhfarmvn@gmail.com</Text></Flex>
                        <Flex><FaLink/><Text fontSize='sm'>&nbsp;&nbsp;https://www.instagram.com/linhfarmvn</Text></Flex>
                        <Flex><FaMapMarkerAlt/><Text fontSize='sm'>&nbsp;&nbsp;39B Nguyễn Văn Linh, Tân Thuận Tây, quận 7, Hồ Chí Minh</Text></Flex>
                        <Flex><FaMapMarkedAlt/>&nbsp;&nbsp;&nbsp;<Link href='https://www.google.com/maps/place/39b+Nguy%E1%BB%85n+V%C4%83n+Linh,+T%C3%A2n+Thu%E1%BA%ADn+T%C3%A2y,+Qu%E1%BA%ADn+7,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7512962,106.7221785,17z/data=!3m1!4b1!4m5!3m4!1s0x3175258768e39705:0x58f4ef44521b8d1!8m2!3d10.7512909!4d106.7243672?hl=vi-VN' fontSize='sm' color='red.700' isExternal >Dẫn đường đến shop</Link></Flex>
                    </Box>
                    <Box height='200px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Giới thiệu</Text>
                        <Flex ml={10}>
                            <Image
                            p='0.5'
                            width="auto"
                            height="auto"
                            objectFit='cover'
                            src='../card.png'
                            alt='Linh Farm'
                            />
                        </Flex>
                        <Text>
                        </Text>
                    </Box>
                    <Box height='160px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Fanpage</Text>
                        <Flex position='relative'>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLinh-Farm-107510472000251%2F%3Fref%3Dpages_you_manage&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=220058775445865" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    position='absolute'
                                    top='0' bottom='0' left='0' right='0'
                                    height='100%' width='100%'
                            ></iframe>

                        </Flex>
                    </Box>
                </SimpleGrid>
            </Flex>
            <SimpleGrid columns={{base:'1', md:'2'}}
                        margin='auto' p={2} maxW='1300px' 
                        fontStyle='italic' color='#847f72' fontSize='sm' >
                <Box textAlign={{base:'left', md:'right'}}>
                    {year} © Linh Farm store &nbsp;
                </Box>
                <Box textAlign={{base:'right', md:'left'}}>
                    - Made by <Link href='https://www.facebook.com/AngerLove2902' color='pink.300' isExternal >Linh Doan</Link> with 🖤
                </Box>
            </SimpleGrid>
        </Box>
    );
}
export default Footer;