import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import RenderIf from "../RenderIf";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export type ItextInput = {
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  placeholder?: string;
  isSelect?: boolean;
  selectItem?: { label: string; value: string }[];
};

const TextInput = ({
  label,
  name,
  onChange,
  error,
  type = "text",
  placeholder,
  isSelect,
  selectItem,
}: ItextInput) => {
  const [show, setShow] = useState(false);
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor='email'
      >
        {label}
      </label>
      <RenderIf condition={!isSelect}>
        <Box className='relative'>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            name={name}
            type={show && type === "password" ? "password" : "text"}
            placeholder={placeholder}
            onChange={onChange}
          />
          <RenderIf condition={type === "password"}>
            <Box
              className='absolute top-3 right-2'
              onClick={() => setShow(!show)}
            >
              {!show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </Box>
          </RenderIf>
        </Box>
      </RenderIf>
      <RenderIf condition={!!isSelect}>
        <TextField
          variant='outlined'
          select
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        >
          {selectItem?.map((item, idx) => {
            return (
              <MenuItem value={item.value} key={`menu-${idx}`}>
                {item.label}
              </MenuItem>
            );
          })}
        </TextField>
      </RenderIf>
      {error && (
        <Typography variant='body1' className='text-red-500'>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
