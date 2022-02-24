import React from 'react';
import { XIcon } from "@heroicons/react/solid";
import styles from "../styles/Home.module.css";
import Button from './Button';

export default function InstructionModal ({ showInstruction, closeInstruction }) {
    return (
        <div className={styles.instruction, styles.instructionFadeInUp, styles.fadeInUp} style={{ display: showInstruction ? "block" : "none" }}>
           
                <XIcon className={styles.instruction_close} onClick={ closeInstruction } />
                
                <div className={styles.instruction_text}>
                    <h3 className={styles.instruction_title}>Instructions</h3>
                    <p>You can redeem this voucher on the Roving Heights website by clicking on the "Redeem Now" button.</p>
                    <p>The discount code will be applied automatically. If not applied, manually copy and paste the discount code and follow the checkout Instructions.</p>
                    <p>Delivery is also covered so that you don&apos;t have to make any further payments.</p>
                    <p>You can redeem this voucher on the Roving Heights website by clicking on the "Redeem Now" button.</p>
                </div>
                <div className={styles.button_container}>
                    <Button text="OK" showArrow={false} onClick={ closeInstruction } />
                </div>
        </div>
    );
}
