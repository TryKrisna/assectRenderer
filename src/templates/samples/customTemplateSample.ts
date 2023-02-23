// import { v2 } from "@govtechsg/open-attestation";

// export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
//   name: string;
//   institute: string;
//   foo?: {
//     title: string;
//   };
//   $template: v2.TemplateObject;
// }

// export const customTemplateCertificate: CustomTemplateCertificate = {
//   name: "John Doe",
//   institute: "Institute of John Doe",
//   issuers: [
//     {
//       name: "institute of blockchain"
//     }
//   ],
//   $template: {
//     name: "custom",
//     type: v2.TemplateType.EmbeddedRenderer,
//     url: "http://localhost:3000"
//   },
//   foo: {
//     title: "Bar is awesome"
//   }
// };


import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
    profile: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {

  name: "Digital Invoice Certificate",
  issuers: [
    {
      name: "My name",
      // 
      documentStore: "0x9a89355De3f04Ad788ECb26B4e8B75805f23161D",
      // documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "brown-teal-cattle.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  recipient: {
    name: "Krisna Try",
    profile: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",

  },
  $template: {
    name: "SnaTemplate",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};