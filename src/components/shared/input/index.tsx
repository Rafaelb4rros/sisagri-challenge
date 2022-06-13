import type { InputProps } from "./input.types";
import { InputWrapper, Input as StyledInput } from "./input.styles";
import { Box } from "../box";
import { ForwardedRef, forwardRef } from "react";
import { InputVariantsType } from "../../../styles/theme";
import { Text } from "../text";

const InputComponent = (
  {
    variant,
    error,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    ...rest
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <InputWrapper>
      <Box
        s={{
          width: "100%",
          height: "max-content",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {LeftIcon && (
          <LeftIcon
            tabIndex={-1}
            size={20}
            color="#888888"
            style={{ left: "20px" }}
          />
        )}

        {RightIcon && <RightIcon />}

        <StyledInput
          error={error}
          variant={variant as InputVariantsType}
          ref={ref}
          {...rest}
        />
      </Box>

      {error && (
        <Text variant="sm" color="danger">
          {error}
        </Text>
      )}
    </InputWrapper>
  );
};

export const Input = forwardRef(InputComponent);
