import React from 'react'
import { useParams } from 'react-router-dom'

const ShopItem = () => {
  const { item } = useParams();
  let refItem, urlItem, redirectURL;
  if (item === 'noise-cancel-headphones') {
    refItem = 'Bose QuietComfort Wireless Noise Cancelling Headphones, Bluetooth Over Ear Headphones with Up to 24 Hours of Battery Life, Twilight Blue - Limited Edition ';
    redirectURL = 'https://www.amazon.in/Bose-QuietComfort-Cancelling-Headphones-Bluetooth/dp/B0DZHR44J9/ref=sxin_14_pa_sp_search_thematic_sspa?content-id=amzn1.sym.7d24a1f6-077e-4200-9faf-bce027074aa5%3Aamzn1.sym.7d24a1f6-077e-4200-9faf-bce027074aa5&crid=9ZTB8Z2NHFJB&cv_ct_cx=noise%2Bcancellation%2Bheadphones&keywords=noise%2Bcancellation%2Bheadphones&pd_rd_i=B0DZHR44J9&pd_rd_r=476c4cb8-6873-43ce-8ac1-6d011411a5cf&pd_rd_w=LVg2t&pd_rd_wg=bpF5g&pf_rd_p=7d24a1f6-077e-4200-9faf-bce027074aa5&pf_rd_r=FDWTV1735KT99X92VQ02&qid=1760423554&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=noise%2Bcancellation%2Bheadphone%2Caps%2C300&sr=1-4-4e480fe6-dd02-46af-8da7-58088322ef64-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1';
  }
  else if (item === 'packing-cubes-with-compression') {
    refItem = 'MONJAY 7pcs pouche Set Travel Organizer Packing Cubes Lightweight Travel Luggage Organizers with Laundry Bag or Toiletry Bag Laundry Organiser (7 PCS, Grey) ';
    redirectURL = 'https://www.amazon.in/Organizer-Lightweight-Organizers-Organiser-polyester/dp/B0CJRNG5HC/ref=sr_1_1_sspa?crid=AF5XBFKTVXC1&dib=eyJ2IjoiMSJ9.8QNHi2kaDG4IYEVqM8HhKkXF79eJq69V0vDJKbJ00fYGOH6vqrezCh6_aTrbm1a9MBRLsUlVXojOPcujm6NFqPJULxEpLTW5W8u78UcW640Ym2YLOVsIb4BlxmSILjB4PVaIDTOSAMERfDVSrSc_m9zy0xKfeu_tykiT9dfATPa8rYDgDFtG7Uq7emVOGoU_bXlv2exNu3VBSCtRXXVAAttSt2IGeNC_EsCiSD_HmLV7tWiL-RtAYLtD2hShEOflMwfOROcNogmN8-6ldnd7i3Q_DgL28W5pOT9CVKVE4uc.jzDnLTnCppYF5aVUOTSg_APgVAD3tdYCRLPDmD5YqHU&dib_tag=se&keywords=travel%2Borganizer&qid=1760424008&sprefix=travel%2Borganiz%2Caps%2C317&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1';
  }
  else if (item === 'reusable-water-bottle') {
    refItem = 'ALL TIME Freeze Water Bottle 1000 ML Indigo Color | Unbrekable | Reusable BPA free Fridge Water Bottle ';
    redirectURL = 'https://www.amazon.in/Milton-Hector-Bottle-1000-Blue/dp/B085JCGPS6/ref=sr_1_6?crid=1YF8O2CK1MO97&dib=eyJ2IjoiMSJ9.84HGxmNih4l0B8YF1eBiuUQN0JeDcI53j25J_ivWJaevm4ets63HGuQc1muP_DV-_Jt7OlQ0pPMEkTLMOOnASCSwKhZ4NnoWGd44LoM1-M8_rZnveFMd-IdFWzOldCNR0eMTumbahcIF2HVk02YsfrUhrxOP_zj08N138b13nkIPaKx5MppbH6Sd3RfRPefly9uuENXcNx4VWfkNZC93-M7r3qccLDCw9Lh65n6NJ5ToNAd_2gKjtfc_s8IELinhxUBJquaE7YIsuaPDHEQ-UV-UkPX20n5V3WfXU9lAzDI.PYL5-quxN4fmdyluwp3cdA5cUZFqmAO-65kYjKFXAvY&dib_tag=se&keywords=reusable%2Bwater%2Bbottle&qid=1760426602&sprefix=reusable%2Bwater%2Caps%2C348&sr=8-6&th=1';
  }
  else if (item === 'travel-pillow') {
    refItem = 'CareFoam Travel Neck Pillow | Premium Memory Foam Neck Pillow for Flight Travel, Car Sleeping | Adjustable Head Rest, Neck Rest Travelling Pillow for Sleeping Head Support ';
    redirectURL = 'https://www.amazon.in/CareFoam-Premium-Sleeping-Adjustable-Travelling/dp/B0F3TX36NZ/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.88162dec-e7ad-44a4-bc35-c1ae6ac07aba%3Aamzn1.sym.88162dec-e7ad-44a4-bc35-c1ae6ac07aba&crid=3BPXLZC3I8M1J&cv_ct_cx=travel%2Bpillow&keywords=travel%2Bpillow&pd_rd_i=B0F3TX36NZ&pd_rd_r=c3ba4c24-a336-47e2-b66b-50b9ae7b483b&pd_rd_w=iIkVw&pd_rd_wg=WMGVF&pf_rd_p=88162dec-e7ad-44a4-bc35-c1ae6ac07aba&pf_rd_r=MHH9XRJ32W3VPCQ666RJ&qid=1760426268&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=travel%2Bpillow%2Caps%2C343&sr=1-2-883a54c7-f466-4d42-997c-6d482a360a1a-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1';
  }
  else if (item === 'baggage') {
    refItem = 'American Tourister Polypropylene 8 Wheels Trolley Bag for Travel | Upland Spinner 79 Cms Hardsided Large Check-in Luggage Bag | Suitcase for Travel | Trolley Bag for Travelling, Formula Red';
    redirectURL = 'https://www.amazon.in/American-Tourister-Polycarbonate-FS3-001/dp/B07RY9QPDT/ref=sr_1_7?crid=3F4KCQ78OPT0N&dib=eyJ2IjoiMSJ9.MaHNPDLW2ddRBRopRqGw8IEUFw8cTGmW14gywsKIfMHs_IUZ5TzvxFO3XJ2SaEijzJa8nkFqerwdRmZXGmJTRutH8_oHLGlDO11TuQSgB5i_Z-B_VK_e9vWYsITNdDOrdJZf19LYuSU8dfXcXkdCr1has4nkk8wWezppE95pXulEBOKEn2E5TjzMjdfK0EfZ99KIjHT0qxqRWqp-X9oK3Nk8h0mGKeUQSguD3dSI5sI2OKh47YeSt4vqgKjpeQ5iOidqpfVF3j-eDWPOQm7T8Kt9sGfVF5L87RU4LKw3_CM.fT6VGwTzaRZmpy9tRv-nzy9EGZKtRU21WFXTE2jZ4qQ&dib_tag=se&keywords=red%2Bbaggage&qid=1760426146&sprefix=red%2Bbagg%2Caps%2C260&sr=8-7&th=1';
  }
  else if (item === 'universal-travel-adapter') {
    refItem = 'Embox Universal Charger Adapter 224+ Countries Support Travel Adapter International All in One Worldwide International Travel Adapter (White) ';
    redirectURL = 'https://www.amazon.in/Prime-Deals-Adapter-Travel-International/dp/B0859H1MTB/ref=sr_1_4?crid=1TJEUPPS8XVZA&dib=eyJ2IjoiMSJ9.b7qA6o9nrIflooTkn3wdHaUy6N_bKA2M2We2vFEvTp5iH5U2b836rqV9jUKVJrQVmEBdqaAnwD_dhPSuE_4WAaac0uh8KWTkQCIXz2GVUonPd9nWIcZxvrlbYkh49RaeZ90qwzm5eGwZUIFpyDmJLr5mVUx7ISP_rQtGlq_9ii6DsAUmExNcJ_EiNb5FDccdrMlIMFpeefQl-IUD0VpQT40jWc7rC0__SItcExrq3J0.Gnx8HBGUvrxhZKsL4NPlgA9xbpZYvXcebLK73aY8AZI&dib_tag=se&keywords=universal%2Btravel%2Badapter&qid=1760426725&sprefix=universal%2Btravel%2Badapter%2Caps%2C328&sr=8-4&th=1';
  }
  else if (item == 'self-sealing-dry-bag') {
    refItem = 'Transparent Stand-Up Ziplock Storage Pouches 500g | Leakproof, Resealable & Reusable Plastic Bags | Self-Sealing Airtight Pouch for Snacks, Dry Fruits, Spices, Coffee & Kitchen Storage (Pack of 50) ';
    redirectURL = 'https://www.amazon.in/dp/B0FV3J463R/ref=sr_1_3?dib=eyJ2IjoiMSJ9.zgEYOzJE2pXAX-fg6nueYIz_KswLSWkQdYI--yPSZlqrz7aD8l9GFHwV3NB5Dzx9s4JEPGXM8xV6GaXCFv0fDOZ2-KD9NCr-jh1Hyz87CuMyXoMQ0szj5nUXgyWWX78XLaAhfrhsxKqrqEKVzJbBvsogpxu4E6soJXwYCJ5Q_KSqXzr3E_SXQ-iMw1cEHvsLayl_UDX9ItMs7LjeQURuaYqVg3RLCAfVUg-Rj_MRz3tFh0hanJDRPYXF6xv4HMBeERHiJEWShTo1rqZ2EaTECoF5Zp3GLd_hf4R4WPDYWoU.LoVfBVlWNzIvE0JXGWv53-VpBQmOYuGKM_zpwa86pIk&dib_tag=se&keywords=self+sealing+dry+bag&qid=1760423897&sr=8-3';
  }
  else if (item == 'power-bank') {
    refItem = 'Xiaomi Power Bank 4i 20000mAh 33W Super Fast Charging PD |Smart 12 Layer Protection|Type C Input & Output|Triple Output Ports|Supports Android,Apple, Tablets, Earbuds,Watch(MI Powerbank),Black';
    redirectURL = 'https://www.amazon.in/Xiaomi-20000mAh-Charging-Delivery-Supports/dp/B0DCZ3WDTB/ref=sr_1_4?crid=1D5S0KQWNE69A&dib=eyJ2IjoiMSJ9.317spcpgAAcy7THilN7_AglW2Qkv0VRxzGrJsVwWrYq2ISKvCsnpPATOiZZXXRQf11pWuhbuDWD76JbKiPh2dnV-xhLZJmdoDVwJg-ts7_iw8vpg6oW3D0BQK_7w3i5__ituEKoZ2mVoH_ExuhC6R894GT64DQE8Ru8bO45MG8B6rdMWm0xQ6eLjQkTNTphRCngVC5fZhrfzMVqoz7ExPm1qc_ubDf4tyTlsacaNLvw.vkUPVBMQmvRaDyuLTk9kCj3BXwxBVS4ch6LDR3oPsOQ&dib_tag=se&keywords=power%2Bbank&qid=1760423946&sprefix=power%2Bbanl%2Caps%2C321&sr=8-4&th=1'

  }
  else if (item == 'travel-organizer') {
    refItem = 'AVENUX 7pcs Set Travel Organizer Packing Cubes Lightweight Travel Luggage Organizers with Laundry Bag or Toiletry Bag Laundry Organiser (Grey, 7 PCS) ';
    redirectURL = 'https://www.amazon.in/Organizer-Lightweight-Organizers-Organiser-polyester/dp/B0CJRNG5HC/ref=sr_1_1_sspa?crid=AF5XBFKTVXC1&dib=eyJ2IjoiMSJ9.8QNHi2kaDG4IYEVqM8HhKkXF79eJq69V0vDJKbJ00fYGOH6vqrezCh6_aTrbm1a9MBRLsUlVXojOPcujm6NFqPJULxEpLTW5W8u78UcW640Ym2YLOVsIb4BlxmSILjB4PVaIDTOSAMERfDVSrSc_m9zy0xKfeu_tykiT9dfATPa8rYDgDFtG7Uq7emVOGoU_bXlv2exNu3VBSCtRXXVAAttSt2IGeNC_EsCiSD_HmLV7tWiL-RtAYLtD2hShEOflMwfOROcNogmN8-6ldnd7i3Q_DgL28W5pOT9CVKVE4uc.jzDnLTnCppYF5aVUOTSg_APgVAD3tdYCRLPDmD5YqHU&dib_tag=se&keywords=travel%2Borganizer&qid=1760424008&sprefix=travel%2Borganiz%2Caps%2C317&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1';
  }
  else if (item == 'usb-data-blocker') {
    refItem = 'PortaPow USB Data Blocker (Twin Pack) - Protect Against Juice Jacking-Red ';
    redirectURL = 'https://www.amazon.in/PortaPow-Charge-Block-Adaptor-SmartCharge/dp/B00T0DW3F8/ref=sr_1_2?crid=VF49O48OWIWH&dib=eyJ2IjoiMSJ9.awg4FyAxsoDjQR7vNFi8hNOqXVCv7RBX0E2KCMf9D-WY3Vl-VNaP9cVxiERqgYBpIamK9cPKm50s0Ems6we6z6Cl6Y6VvS1VrL4q1IUZfnvmwgZDJiOGfE9aEktRaNQb9AfYFiGC1d4buTLcpCty8CBP7arpZWLcIY3Hby57raTcnJwJ6sDFmkPtlot6A5LSJqo26-XkoRu_hFGxeBb4DFS8QGO8Mj0xw0QCJ_tLepg.3igutmkcTzSZgjPtER8l6yr-j5L5xvT7Mp1TNNPDZRU&dib_tag=se&keywords=usb+data+blocker&qid=1760424061&sprefix=usb+data+blocker%2Caps%2C332&sr=8-2';
  }
  else if (item == 'portable-door-lock') {
    refItem = 'HASTHIP® Portable Door Lock,Travel Door Lock Chain,Prevent Unauthorized Entry Additional Security and Privacy for Traveling Hotel Home Apartment Dorm (2PCS) ';
    redirectURL = 'https://www.amazon.in/HASTHIP%C2%AE-Unauthorized-Additional-Traveling-Apartment/dp/B0B1CV829Q/ref=sr_1_6?crid=3OAQQALYVQEGA&dib=eyJ2IjoiMSJ9.bLwqIfhh0RdhXnRKMyrCS3tsS3q4c70oMwUWWv7OP0kaJyFbMLn4W8p0Nz5TrUeMbvlJjFB8IipoZ9Tk4Wb0dt0o2LSDL6gVwl5yZYImkaQQw80Xm6-nMgWm3zYIYpUfzdyjMdjehQcTEw29suQheXYrnjJ2oOP51y6MiX3K2V8gNTLbadYmCmJN9bg5pVM4xxKY1APHw3FysrOXQ06HfA0EZCBCftT_q9VBXGlUcMXqs7PKrbIjKoQyIFGUSbB0hLFxSfGFT4Pb_xe2JJA7-ijFbxzEhFmJ4QQ1FR1avF0.FotA4oJspswUH270P1xuOcuZSA98AXs3mumHh9NcX04&dib_tag=se&keywords=portable%2Bdoor%2Block&qid=1760424083&sprefix=portable%2Bdoor%2Block%2Caps%2C269&sr=8-6&th=1';
  }
  else if (item == 'travel-footrest') {
    refItem = 'Foot Rest, Portable Adjustable Height Travel Footrest Flight Carry-on Foot Rest ,Home Office Desk Foot Hammock-Provides Relaxation and Comfort(1 Set)';
    redirectURL = 'https://www.amazon.in/Portable-Adjustable-Footrest-Hammock-Provides-Relaxation/dp/B07Q65F2FQ/ref=sr_1_5?crid=8DVQ94JEF4A7&dib=eyJ2IjoiMSJ9.Fw2du1yk_Zg18W63Pyr1_Wc0pgJmTdkrQrZv2oqdmw40Ah00eLatD-AgexKVrYG4KBDd5zJPEqYB580_jaaXebe9iOqtkrhZrCsns0awRyPT4Geg9-VZpnyOAXnsm1nD7hpfYKcM8z_Ey-NgC_5mxvzQ5izk93SQJNPlgyraPbCfGLUHlMCiRWJWP4oujJXTZT0ROd5GOtYULnozqpQxyDoUcmmWXJRYW3tibUv2ihR6qbkXKEWU4Oc_ZAs98maILytBymbf5-h5VVT5m6ixVQdYsFR1ky0OmIr8ZCzCiUU.7DsIRAtQWUSIx-a6m1xb1p3T6mpzBSYTj1uO7czTyFE&dib_tag=se&keywords=travel+footrest&qid=1760424128&sprefix=travel+footres%2Caps%2C266&sr=8-5';
  }
  else {
    refItem = 'Item Not Found';
    redirectURL = 'https://www.amazon.in/';
  }

  if (item == "packing-cubes-with-compression") {
    urlItem = "packing-cubes-with-compression.jpeg"
  } else if (item == "noise-cancel-headphones") {
    urlItem = "noise-cancel-headphones.webp"
  } else {
    urlItem = `${item}.jpg`
  }
  return (
    <div className="container mx-5 my-5 d-flex align-items-center">
      <img
        src={`/${urlItem}`}
        alt={refItem}
        style={{
          maxWidth: '300px',
          maxHeight: '300px',
          objectFit: 'cover',
          marginRight: '32px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
      <div className="d-flex flex-column justify-content-center align-items-end" style={{ flex: 1 }}>
        <h2
          className="mb-4 text-end"
          style={{
            fontFamily: 'Canva Sans',
            fontWeight: 'bold',
            maxWidth: '500px',
            wordBreak: 'break-word',
            whiteSpace: 'pre-line'
          }}
        >
          {refItem}
        </h2>
        <a href={redirectURL}>
          <button className="btn btn-primary">
            Shop Now!
          </button>
        </a>
      </div>
    </div>
  )
}
export default ShopItem
