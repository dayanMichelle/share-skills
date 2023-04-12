import React from "react";

export const AccountSettingsMenu = () => {
  return (
    <div className="w-48 p-4 text-gray-900 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Configuración de Cuenta</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="/perfil"
            className="block text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Perfil
          </a>
        </li>
        <li>
          <a
            href="/seguridad"
            className="block  hover:text-blue-600 transition duration-300"
          >
            Seguridad
          </a>
        </li>
        <li>
          <a
            href="/notificaciones"
            className="block text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Notificaciones
          </a>
        </li>
        <li>
          <a
            href="/preferencias"
            className="block text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Preferencias
          </a>
        </li>
        <li>
          <a
            href="/cuenta"
            className="block text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Cuenta
          </a>
        </li>
      </ul>
    </div>
  );
};


