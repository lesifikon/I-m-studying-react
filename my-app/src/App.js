import React, { useState, useEffect, useRef, useCallback } from 'react';

function App() {
  const [photos, setPhotos] = useState([]); // Храним список фото
  const [page, setPage] = useState(1);       // Номер текущей страницы
  const [loading, setLoading] = useState(false); // Статус загрузки
  const observer = useRef(); // Реф для наблюдения за скроллом

  // Функция загрузки данных (используем бесплатный JSONPlaceholder API)
  const fetchPhotos = useCallback(async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNum}&_limit=10`);
      const data = await response.json();
      setPhotos(prev => [...prev, ...data]); // Добавляем новые фото к старым
    } catch (err) {
      console.error("Ошибка загрузки:", err);
    }
    setLoading(false);
  }, []);

  // Загружаем данные при изменении страницы
  useEffect(() => {
    fetchPhotos(page);
  }, [page, fetchPhotos]);

  // Колбэк для последнего элемента в списке
  const lastPhotoRef = useCallback(node => {
    if (loading) return; // Если идет загрузка, ничего не делаем
    if (observer.current) observer.current.disconnect(); // Очищаем старый наблюдатель
    
    observer.current = new IntersectionObserver(entries => {
      // Если последний элемент виден, увеличиваем номер страницы
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) observer.current.observe(node); // Начинаем следить за новым последним элементом
  }, [loading]);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Моя бесконечная лента</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {photos.map((photo, index) => {
          // Если это последний элемент в массиве, вешаем на него ref
          const isLastElement = photos.length === index + 1;
          return (
            <div 
              ref={isLastElement ? lastPhotoRef : null} 
              key={photo.id} 
              style={cardStyle}
            >
              <img src={photo.thumbnailUrl} alt={photo.title} style={{ borderRadius: '4px' }} />
              <p>{photo.title}</p>
            </div>
          );
        })}
      </div>
      {loading && <h2 style={{ color: 'blue' }}>Загрузка новых фото...</h2>}
    </div>
  );
}

// Простые стили для карточки
const cardStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  borderRadius: '10px',
  width: '300px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

export default App;