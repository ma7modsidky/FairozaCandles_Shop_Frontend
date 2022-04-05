import React, {useState} from 'react'
import "@themesberg/flowbite";



function DropdownList({name,childs,id}) {
  const [visible, setVisible] = useState(false)
  return (
    <li>
      {childs.length > 0 ? (
        <>
          <button
            type="button"
            className="flex items-center w-full text-base font-normal rounded-lg transition duration-75 group hover:text-secondary"
            aria-controls={"#" + name + "id"}
            data-collapse-toggle={name + "id"}
            onClick={(visible) => {setVisible(!visible)}}
          >
            <span
              className="flex-1 text-left whitespace-nowrap"
              sidebar-toggle-item=""
            >
              {name}
            </span>
            <svg
              sidebar-toggle-item=""
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          
          <ul id={name + "id"} className="py-1 px-1">
            {childs.map((c, index) => (
              <li
                className="hover:text-secondary text-sm pointer cursor-pointer"
                key={index}
              >
                {c.name}
              </li>
            ))}
          </ul>

        </>
      ) : (
        <span className="hover:text-secondary text-md cursor-pointer">
          {name}
        </span>
      )}
    </li>
  );
}

export default DropdownList