module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'max-nesting-depth': [3, { ignore: ['blockless-at-rules'] }], // Проверяем до 3 уровней вложенности
    // Разрешаем SCSS-миксины (@include, @mixin, @use и т. д.)
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'mixin',
          'use',
          'forward',
          'import',
          'extend',
        ],
      },
    ],

    'block-no-empty': true, // Запрещаем пустые блоки {}

    // Проверка именования классов (БЭМ + утилитарные классы)
    'selector-class-pattern': [
      '^(sr-only|[a-z][a-z0-9]*(__[a-z0-9_-]+)?(--[a-z0-9_-]+)?)$',
      {
        message:
          'Use BEM naming: block__element--modifier or utility classes like sr-only',
      },
    ],

    // Упорядочивание кода: переменные → свойства → медиа-запросы
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      { type: 'at-rule', name: 'include' },
      { type: 'at-rule', name: 'media' },
    ],

    // Логическая сортировка CSS-свойств
    'order/properties-order': [
      {
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
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
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'box-sizing',
          'font',
          'font-size',
          'font-weight',
          'line-height',
          'text-align',
          'color',
          'text-decoration',
          'background',
          'background-color',
          'background-image',
          'border',
          'border-radius',
          'box-shadow',
          'opacity',
          'transform',
          'transition',
          'animation',
          '--custom-property',
        ],
        severity: 'warning', // Показывает предупреждения
      },
    ],
  },
};
