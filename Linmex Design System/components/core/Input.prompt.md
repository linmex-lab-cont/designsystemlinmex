Text field with label, hint, error and brand-orange focus ring.

```jsx
<Input label="Correo electrónico" type="email" placeholder="tu@correo.com" iconLeft={<Mail/>} />
<Input label="Teléfono" error="Número no válido" />
```

`label`, `hint`, `error` (error overrides hint and reddens the border), `iconLeft`, `size` sm|md|lg, `full`.
