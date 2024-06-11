import Advert from "../models/Advert.js";

export const getAdverts = async (req, res) => {
    try {
        const adverts = await Advert.find();
        res.status(200).json(adverts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAdvertById = async (req, res) => {
    try {
        const advert = await Advert.findById(req.params.id);
        if (!advert) return res.status(404).json({ message: 'Advert not found' });
        res.status(200).json(advert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

