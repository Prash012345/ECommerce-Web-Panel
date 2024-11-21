import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryList from '../components/Category/CategoryList';
import FeaturedCollections from '../components/FeaturedCollections';  // New section for featured collections
import TrendingBrands from '../components/TrendingBrands';  // New section for trending brands
import Promotions from '../components/Promotions';  // New section for promotions
import { getCategories, getFeaturedCollections, getTrendingBrands, getPromotions } from '../services/api';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredCollections, setFeaturedCollections] = useState([]);
  const [trendingBrands, setTrendingBrands] = useState([]);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      const parents = data.filter(category => !category.parent);
      const children = data.filter(category => category.parent);
      setCategories({ parentCategories: parents, childCategories: children });
    };

    const fetchFeaturedCollections = async () => {
      const data = await getFeaturedCollections();
      setFeaturedCollections(data);
    };

    const fetchTrendingBrands = async () => {
      const data = await getTrendingBrands();
      setTrendingBrands(data);
    };

    const fetchPromotions = async () => {
      const data = await getPromotions();
      setPromotions(data);
    };

    fetchCategories();
    fetchFeaturedCollections();
    fetchTrendingBrands();
    fetchPromotions();
  }, []);

  return (
    <div>
      <HeroBanner />

      {/* Section for Parent Categories */}
      <div className="parent-category-section">
        <h2>Parent Categories</h2>
        <CategoryList categories={categories.parentCategories} isParentCategory={true} />
      </div>

      {/* Section for Child Categories */}
      <div className="child-category-section">
        <h2>Child Categories</h2>
        <CategoryList categories={categories.childCategories} isParentCategory={false} />
      </div>

      {/* Featured Collections Section */}
      <FeaturedCollections collections={featuredCollections} />

      {/* Trending Brands Section */}
      <TrendingBrands brands={trendingBrands} />

      {/* Promotions Section */}
      <Promotions promotions={promotions} />
    </div>
  );
};

export default Home;
