// src/data/aboutContent.ts
export interface AboutSectionContent {
    title: string;
    paragraphs: string[];
  }
  
  export const aboutSections: AboutSectionContent[] = [
    {
      title: "Why",
      paragraphs: [
        "Hackers can generate fake addresses with similar beginning and end by force. Due to the difficulty in verifying complex characters, users may easily overlook the tampering in the middle by only verifying the characters before and after, which may lead to financial risks.",
      ],
    },
    {
      title: "How",
      paragraphs: [
        "Coloring addresses with hash values can significantly improve the distinguishability of addresses. Even if only one error occurs at the address, the color change calculated by the hash value will be significantly different.",
      ],
    },
    {
      title: "What",
      paragraphs: [
        "This dyeing scheme is compatible with the existing address display schemes and does not require complex modifications. It can be directly implemented on the existing system, and users do not need to adapt to the new interface.",
      ],
    },
    {
      title: "Who",
      paragraphs: [
        "This tool is suitable for cryptocurrency users (especially those who frequently transfer money), exchanges and wallet developers in scenarios where address security needs to be quickly confirmed.",
      ],
    },
  ]; 