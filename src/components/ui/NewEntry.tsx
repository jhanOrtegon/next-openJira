import React, { useState } from "react";
import { Modal, Button, Text, Textarea } from "@nextui-org/react";
import { NextPage } from "next";
import { propsNewEntry } from "./types";
import { ChevronLeftCircle, EditSquare, Send } from "react-iconly";
// import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { newNotify } from "@/utils";

export const NewEntry: NextPage<propsNewEntry> = ({
  showModal,
  onCloseModal,
  description,
  onChangeTextarea,
  helperText,
  color,
  helperColor,
  onSave,
}) => {
  const [touch, setTouch] = useState(false);
  return (
    <>
      <Modal
        preventClose
        blur
        width="400px"
        closeButton
        aria-labelledby="modal-title"
        open={showModal}
        onClose={() => {
          onCloseModal();
          setTouch(false);
        }}
      >
        <Modal.Header>
          <Text className="mr-2">
            <EditSquare set="light" primaryColor="white" />
          </Text>
          <Text id="modal-title" b size={18}>
            Nueva entrada
          </Text>
        </Modal.Header>
        <Modal.Body className="py-8">
          <Textarea
            shadow
            bordered
            placeholder="Descripción"
            name="description"
            borderWeight="light"
            helperText={helperText}
            color={touch ? color : "default"}
            helperColor={touch ? helperColor : "default"}
            value={description}
            onChange={onChangeTextarea}
            onBlur={() => setTouch(true)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            icon={<ChevronLeftCircle set="light" primaryColor="red" />}
            auto
            flat
            bordered
            borderWeight={"light"}
            color={"error"}
            onClick={onCloseModal}
          >
            Cancelar
          </Button>
          <Button
            iconRight={<Send set="light" primaryColor="green" />}
            auto
            flat
            bordered
            disabled={color === "error"}
            borderWeight={"light"}
            color={"success"}
            onClick={() => {
              onSave();
              newNotify("Nueva nota agregada");
              onCloseModal();
            }}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};
