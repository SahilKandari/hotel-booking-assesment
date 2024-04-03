import React from 'react'
import GalleryCard from './GalleryCard'

const Gallery = () => {
  const galleryCardsData = [
    {
      title: "Tranquil Haven Resort & Spa",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)",
      desc: "A peaceful retreat amidst lush landscapes, offering spacious rooms, rejuvenating spa treatments, and delectable cuisine.",
      btnTxt: "Book Tranquil Haven",
      btnCol: '#d99536'
    },
    {
      title: "Azure Sands Beach Resort",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)",
      desc: "Secluded beachfront cottages, infinity pool, and water sports activities for a memorable seaside getaway.",
      btnTxt: "Book Azure Sands",
      btnCol: '#f6f6f4'
    },
    {
      title: "Mountain Peak Lodge & Retreat",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)",
      desc: "Cozy alpine accommodations nestled in the mountains, perfect for nature lovers and adventure enthusiasts.",
      btnTxt: "Book Mountain Peak",
      btnCol: '#e7b75f'
    },
    {
      title: "Eternal Springs Retreat",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)",
      desc: "A sanctuary nestled in verdant valleys, offering cozy lodges, invigorating hot springs, and scenic hiking trails.",
      btnTxt: "Book Eternal Springs",
      btnCol: '#fbeeca'
    },
    {
      title: "Tranquil Haven Resort & Spa",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)",
      desc: "A peaceful retreat amidst lush landscapes, offering spacious rooms, rejuvenating spa treatments, and delectable cuisine.",
      btnTxt: "Book Tranquil Haven",
      btnCol: '#d99536'
    },
    {
      title: "Azure Sands Beach Resort",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)",
      desc: "Secluded beachfront cottages, infinity pool, and water sports activities for a memorable seaside getaway.",
      btnTxt: "Book Azure Sands",
      btnCol: '#f6f6f4'
    },
    {
      title: "Mountain Peak Lodge & Retreat",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)",
      desc: "Cozy alpine accommodations nestled in the mountains, perfect for nature lovers and adventure enthusiasts.",
      btnTxt: "Book Mountain Peak",
      btnCol: '#e7b75f'
    },
    {
      title: "Eternal Springs Retreat",
      imageSrc: "https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)",
      desc: "A sanctuary nestled in verdant valleys, offering cozy lodges, invigorating hot springs, and scenic hiking trails.",
      btnTxt: "Book Eternal Springs",
      btnCol: '#fbeeca'
    },
  ];

  return (
    <>
      <div className="flex flex-wrap">
        {galleryCardsData.map((cardData, index) => (
          <GalleryCard key={index} {...cardData} />
        ))}
      </div>
    </>
  )
}

export default Gallery