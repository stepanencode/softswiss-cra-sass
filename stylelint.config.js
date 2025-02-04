module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': [
      '^(sr-only|[a-z]+[a-z0-9]*)(__[a-z0-9_-]+)?(--[a-z0-9_-]+)?$',
      {
        message:
          'USE BEM: block__element--modifier or utility classes of type sr-only',
      },
    ],

    'order/order': [
      'custom-properties', // Переменные (например, $color-primary)
      'dollar-variables', // Sass-переменные
      'declarations', // Обычные свойства
      {
        type: 'at-rule',
        name: 'include',
      }, // Миксины (@include)
      {
        type: 'at-rule',
        name: 'media',
      }, // Медиа-запросы (@media)
    ],

    // 🔥 Логический порядок CSS-свойств
    'order/properties-order': [
      {
        properties: [
          // 1. Позиционирование
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',

          // 2. Блочная модель (размеры, отступы)
          'display',
          'flex',
          'grid',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'padding',
          'box-sizing',

          // 3. Типографика
          'font',
          'font-size',
          'font-weight',
          'line-height',
          'text-align',
          'color',
          'text-decoration',

          // 4. Визуальные стили
          'background',
          'background-color',
          'background-image',
          'border',
          'border-radius',
          'box-shadow',
          'opacity',

          // 5. Эффекты и анимации
          'transform',
          'transition',
          'animation',

          // 6. Кастомные свойства
          '--custom-property',
        ],
        severity: 'warning',
      },
    ],

    // Отключаем алфавитную сортировку
    'order/properties-alphabetical-order': null,
  },
};
