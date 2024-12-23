"use client";

import { useTranslations } from "next-intl";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface CustomDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  text?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  onOk: () => void;
  okBtnText?: string;
  onCancel?: () => void;
  cancelBtnText?: string;
  disabled?: boolean;
}

export const CustomDialog = ({
  open,
  setOpen,
  title,
  text,
  isLoading,
  children,
  onOk,
  okBtnText,
  onCancel,
  cancelBtnText,
  disabled,
}: CustomDialogProps) => {
  const t = useTranslations();
  return (
    <Modal open={open} setOpen={setOpen} title={title}>
      <p>{text}</p>
      <div>{children}</div>
      <div className="my-4 space-x-2 text-right">
        <Button
          variant="secondary"
          onClick={() => {
            if (onCancel) {
              onCancel();
            }
            setOpen(false);
          }}>
          {cancelBtnText || t("common.cancel")}
        </Button>
        <Button variant="warn" onClick={onOk} loading={isLoading} disabled={disabled}>
          {okBtnText || t("common.yes")}
        </Button>
      </div>
    </Modal>
  );
};
