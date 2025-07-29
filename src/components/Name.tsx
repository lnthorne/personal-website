import { useEffect, useState } from "react";
import { styled } from "styled-components";

export const name = `
                                                                                                                                                                                          
LLLLLLLLLLL               iiii                                                 TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                                                                        
L:::::::::L              i::::i                                                T:::::::::::::::::::::Th:::::h                                                                                        
L:::::::::L               iiii                                                 T:::::::::::::::::::::Th:::::h                                                                                        
LL:::::::LL                                                                    T:::::TT:::::::TT:::::Th:::::h                                                                                        
  L:::::L               iiiiiii   aaaaaaaaaaaaa      mmmmmmm    mmmmmmm        TTTTTT  T:::::T  TTTTTT h::::h hhhhh          ooooooooooo   rrrrr   rrrrrrrrr   nnnn  nnnnnnnn        eeeeeeeeeeee    
  L:::::L               i:::::i   a::::::::::::a   mm:::::::m  m:::::::mm              T:::::T         h::::hh:::::hhh     oo:::::::::::oo r::::rrr:::::::::r  n:::nn::::::::nn    ee::::::::::::ee  
  L:::::L                i::::i   aaaaaaaaa:::::a m::::::::::mm::::::::::m             T:::::T         h::::::::::::::hh  o:::::::::::::::or:::::::::::::::::r n::::::::::::::nn  e::::::eeeee:::::ee
  L:::::L                i::::i            a::::a m::::::::::::::::::::::m             T:::::T         h:::::::hhh::::::h o:::::ooooo:::::orr::::::rrrrr::::::rnn:::::::::::::::ne::::::e     e:::::e
  L:::::L                i::::i     aaaaaaa:::::a m:::::mmm::::::mmm:::::m             T:::::T         h::::::h   h::::::ho::::o     o::::o r:::::r     r:::::r  n:::::nnnn:::::ne:::::::eeeee::::::e
  L:::::L                i::::i   aa::::::::::::a m::::m   m::::m   m::::m             T:::::T         h:::::h     h:::::ho::::o     o::::o r:::::r     rrrrrrr  n::::n    n::::ne:::::::::::::::::e 
  L:::::L                i::::i  a::::aaaa::::::a m::::m   m::::m   m::::m             T:::::T         h:::::h     h:::::ho::::o     o::::o r:::::r              n::::n    n::::ne::::::eeeeeeeeeee  
  L:::::L         LLLLLL i::::i a::::a    a:::::a m::::m   m::::m   m::::m             T:::::T         h:::::h     h:::::ho::::o     o::::o r:::::r              n::::n    n::::ne:::::::e           
LL:::::::LLLLLLLLL:::::Li::::::ia::::a    a:::::a m::::m   m::::m   m::::m           TT:::::::TT       h:::::h     h:::::ho:::::ooooo:::::o r:::::r              n::::n    n::::ne::::::::e          
L::::::::::::::::::::::Li::::::ia:::::aaaa::::::a m::::m   m::::m   m::::m           T:::::::::T       h:::::h     h:::::ho:::::::::::::::o r:::::r              n::::n    n::::n e::::::::eeeeeeee  
L::::::::::::::::::::::Li::::::i a::::::::::aa:::am::::m   m::::m   m::::m           T:::::::::T       h:::::h     h:::::h oo:::::::::::oo  r:::::r              n::::n    n::::n  ee:::::::::::::e  
LLLLLLLLLLLLLLLLLLLLLLLLiiiiiiii  aaaaaaaaaa  aaaammmmmm   mmmmmm   mmmmmm           TTTTTTTTTTT       hhhhhhh     hhhhhhh   ooooooooooo    rrrrrrr              nnnnnn    nnnnnn    eeeeeeeeeeeeee  
`;

const description = `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
   SSSSSSSSSSSSSSS                   ffffffffffffffff          tttt                                                                                                       DDDDDDDDDDDDD                                                               lllllll                                                                          
 SS:::::::::::::::S                 f::::::::::::::::f      ttt:::t                                                                                                       D::::::::::::DDD                                                            l:::::l                                                                          
S:::::SSSSSS::::::S                f::::::::::::::::::f     t:::::t                                                                                                       D:::::::::::::::DD                                                          l:::::l                                                                          
S:::::S     SSSSSSS                f::::::fffffff:::::f     t:::::t                                                                                                       DDD:::::DDDDD:::::D                                                         l:::::l                                                                          
S:::::S              ooooooooooo   f:::::f       fffffttttttt:::::ttttttwwwwwww           wwwww           wwwwwwaaaaaaaaaaaaa rrrrr   rrrrrrrrr      eeeeeeeeeeee           D:::::D    D:::::D    eeeeeeeeeeee vvvvvvv           vvvvvvveeeeeeeeeeee   l::::l   ooooooooooo  ppppp   ppppppppp      eeeeeeeeeeee   rrrrr   rrrrrrrrr   
S:::::S            oo:::::::::::oo f:::::f            t:::::::::::::::::tw:::::w         w:::::w         w:::::wa::::::::::::ar::::rrr:::::::::r   ee::::::::::::ee         D:::::D     D:::::D ee::::::::::::eev:::::v         v:::::ee::::::::::::ee l::::l oo:::::::::::oop::::ppp:::::::::p   ee::::::::::::ee r::::rrr:::::::::r  
 S::::SSSS        o:::::::::::::::f:::::::ffffff      t:::::::::::::::::t w:::::w       w:::::::w       w:::::w aaaaaaaaa:::::r:::::::::::::::::r e::::::eeeee:::::ee       D:::::D     D:::::De::::::eeeee:::::ev:::::v       v:::::e::::::eeeee:::::el::::lo:::::::::::::::p:::::::::::::::::p e::::::eeeee:::::er:::::::::::::::::r 
  SS::::::SSSSS   o:::::ooooo:::::f::::::::::::f      tttttt:::::::tttttt  w:::::w     w:::::::::w     w:::::w           a::::rr::::::rrrrr::::::e::::::e     e:::::e       D:::::D     D:::::e::::::e     e:::::ev:::::v     v:::::e::::::e     e:::::l::::lo:::::ooooo:::::pp::::::ppppp::::::e::::::e     e:::::rr::::::rrrrr::::::r
    SSS::::::::SS o::::o     o::::f::::::::::::f            t:::::t         w:::::w   w:::::w:::::w   w:::::w     aaaaaaa:::::ar:::::r     r:::::e:::::::eeeee::::::e       D:::::D     D:::::e:::::::eeeee::::::e v:::::v   v:::::ve:::::::eeeee::::::l::::lo::::o     o::::op:::::p     p:::::e:::::::eeeee::::::er:::::r     r:::::r
       SSSSSS::::So::::o     o::::f:::::::ffffff            t:::::t          w:::::w w:::::w w:::::w w:::::w    aa::::::::::::ar:::::r     rrrrrre:::::::::::::::::e        D:::::D     D:::::e:::::::::::::::::e   v:::::v v:::::v e:::::::::::::::::el::::lo::::o     o::::op:::::p     p:::::e:::::::::::::::::e r:::::r     rrrrrrr
            S:::::o::::o     o::::of:::::f                  t:::::t           w:::::w:::::w   w:::::w:::::w    a::::aaaa::::::ar:::::r           e::::::eeeeeeeeeee         D:::::D     D:::::e::::::eeeeeeeeeee     v:::::v:::::v  e::::::eeeeeeeeeee l::::lo::::o     o::::op:::::p     p:::::e::::::eeeeeeeeeee  r:::::r            
            S:::::o::::o     o::::of:::::f                  t:::::t    tttttt  w:::::::::w     w:::::::::w    a::::a    a:::::ar:::::r           e:::::::e                  D:::::D    D:::::De:::::::e               v:::::::::v   e:::::::e          l::::lo::::o     o::::op:::::p    p::::::e:::::::e           r:::::r            
SSSSSSS     S:::::o:::::ooooo:::::f:::::::f                 t::::::tttt:::::t   w:::::::w       w:::::::w     a::::a    a:::::ar:::::r           e::::::::e               DDD:::::DDDDD:::::D e::::::::e               v:::::::v    e::::::::e        l::::::o:::::ooooo:::::op:::::ppppp:::::::e::::::::e          r:::::r            
S::::::SSSSSS:::::o:::::::::::::::f:::::::f                 tt::::::::::::::t    w:::::w         w:::::w      a:::::aaaa::::::ar:::::r            e::::::::eeeeeeee       D:::::::::::::::DD   e::::::::eeeeeeee        v:::::v      e::::::::eeeeeeeel::::::o:::::::::::::::op::::::::::::::::p e::::::::eeeeeeee  r:::::r            
S:::::::::::::::SS oo:::::::::::oof:::::::f                   tt:::::::::::tt     w:::w           w:::w        a::::::::::aa:::r:::::r             ee:::::::::::::e       D::::::::::::DDD      ee:::::::::::::e         v:::v        ee:::::::::::::el::::::loo:::::::::::oo p::::::::::::::pp   ee:::::::::::::e  r:::::r            
 SSSSSSSSSSSSSSS     ooooooooooo  fffffffff                     ttttttttttt        www             www          aaaaaaaaaa  aaarrrrrrr               eeeeeeeeeeeeee       DDDDDDDDDDDDD           eeeeeeeeeeeeee          vvv           eeeeeeeeeeeeeellllllll  ooooooooooo   p::::::pppppppp       eeeeeeeeeeeeee  rrrrrrr            
                                                                                                                                                                                                                                                                              p:::::p                                                  
                                                                                                                                                                                                                                                                              p:::::p                                                  
                                                                                                                                                                                                                                                                             p:::::::p                                                 
                                                                                                                                                                                                                                                                             p:::::::p                                                 
                                                                                                                                                                                                                                                                             p:::::::p                                                 
                                                                                                                                                                                                                                                                             ppppppppp                                                 `;

const AsciiArtContainer = styled.pre`
	font-family: "VT323", monospace;
	white-space: pre;
	letter-spacing: 0;
	line-height: 1.2;
	margin: 0;
	/* Ensure crisp scaling */
	transform-origin: top left;

	@media (max-width: 1080px) {
		transform: scale(0.7);
	}

	@media (max-width: 780px) {
		transform: scale(0.6);
	}
`;

const Heading = styled.div`
	font-size: 8.2px;
`;

const SubHeading = styled.div`
	font-size: 4px;
`;

const AsciiArt: React.FC = () => {
	return (
		<AsciiArtContainer>
			<Heading>{name}</Heading>
			<SubHeading>{description}</SubHeading>
		</AsciiArtContainer>
	);
};

export default AsciiArt;
