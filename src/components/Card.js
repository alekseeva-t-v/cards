import React from 'react';

/**
 * Компонент отображающий блок отображения карточки
 *
 * @param {object} props.children Cодержимое между открывающим и закрывающим тегом
 * @param {string} props.title Заголовок карточки
 * @param {string} props.text Текстовое содержимое карточки
 * @param {string} props.href Ссылка
 */
const Card = (props) => {
  const { children, title, text, href } = props;
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={href} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  children: null,
  title: 'Card title',
  text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  href: '!#'
};

export default Card;
