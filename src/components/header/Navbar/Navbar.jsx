import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../../services/firebaseConfig';
import LayoutNav from '../Navbar/LayoutNav';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const catCollection = collection(dataBase, 'Categorias');
        getDocs(catCollection)
            .then((res) => {
                const secciones = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setCategories(secciones);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <LayoutNav categories={categories}/>
    );
}

export default Navbar;
