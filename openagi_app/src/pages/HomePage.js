import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NewStackModal from '../components/NewStackModel';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Header />
            <Sidebar />
            <main>
                <h2>Home Page</h2>
                <button onClick={openModal}>+ New Stack</button>
                {isModalOpen && <NewStackModal closeModal={closeModal} />}
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
