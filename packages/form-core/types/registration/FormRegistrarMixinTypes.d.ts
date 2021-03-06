import { Constructor } from '@open-wc/dedupe-mixin';
import { FormControlsCollection } from '../../src/registration/FormControlsCollection';
import { FormRegisteringHost } from '../../types/registration/FormRegisteringMixinTypes';
import { FormControlHost } from '../../types/FormControlMixinTypes';
import { LitElement } from '@lion/core';

export declare class ElementWithParentFormGroup {
  __parentFormGroup: FormRegistrarHost;
}

export declare class FormRegistrarHost {
  _isFormOrFieldset: boolean;
  formElements: FormControlsCollection & { [x: string]: any };
  addFormElement(
    child:
      | (FormControlHost & ElementWithParentFormGroup)
      | (FormControlHost & HTMLElement)
      | (HTMLElement & ElementWithParentFormGroup),
    indexToInsertAt?: number,
  ): void;
  removeFormElement(child: FormRegisteringHost): void;
  _onRequestToAddFormElement(e: CustomEvent): void;
  isRegisteredFormElement(el: FormControlHost): boolean;
  registrationComplete: Promise<boolean>;
}

export declare function FormRegistrarImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T &
  Constructor<FormRegistrarHost> &
  typeof FormRegistrarHost &
  Constructor<FormRegisteringHost> &
  typeof FormRegisteringHost;

export type FormRegistrarMixin = typeof FormRegistrarImplementation;
